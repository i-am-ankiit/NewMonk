import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

      static defaultProps = {
        country : 'us',
        pageSize : 6,
        category : 'general'
      }

      static propTypes ={
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
      }
      capitaliseFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
      constructor(props){
        super(props);
        this.state = {
          articles:[],
          loading:false,
          page:1,
          totalResults: 0
        }
         document.title = `${this.capitaliseFirstLetter(this.props.category)} - NewsMonk`;
      } 
      async UpdateNews(){
        
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        
        let parsedData = await data.json()
        
        console.log(parsedData);  
        this.setState({
          articles:parsedData.articles,
          totalResults:parsedData.totalResults,
          loading:false
        })
        
      }


      


      async componentDidMount(){
        this.props.setProgress(30);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
         this.props.setProgress(50);
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
          articles:parsedData.articles,
          totalResults:parsedData.totalResults,
          loading:false
        })
         this.props.setProgress(100);
          }

          handlePrevClick = async()=>{
            // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6bd3dc78afb84276ae034ac1e468d892&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true});
            // let data = await fetch(url);
            // let parsedData = await data.json()
            // console.log(parsedData);
            // this.setState({
            //   page : this.state.page - 1,
            //   articles:parsedData.articles,
            //   loading:false
            // })
            this.setState({page:this.state.page - 1})
            this.UpdateNews();
          }

          handleNextClick = async()=>{
          //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
          //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6bd3dc78afb84276ae034ac1e468d892&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          //   this.setState({loading:true});
          //   let data = await fetch(url);
          //   let parsedData = await data.json()
          //   this.setState({
          //     page : this.state.page + 1,
          //     articles:parsedData.articles,
          //     loading:false
          // })
           
        //  }
        this.setState({page:this.state.page + 1})
        this.UpdateNews();
        }
        fetchMoreData = async () => {
          this.setState({page:this.state.page + 1});
          const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);  
          this.setState({
            articles:this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults,
            loading:false
          })
        };

  render() {
    return (
      <div className='container my-3'>
      <h1 className="text-center">News Monk - Top {this.capitaliseFirstLetter(this.props.category)} Headlines</h1>
      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>

        <div className="row my-3">
            { this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageurl ={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
            })}      
        </div>
        </div>
        </InfiniteScroll>
        </div>
    )
  }
}

export default News;