import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageurl,newsUrl,author, date} = this.props;
    return (
      <div>
        <div className="card" >
  <img src={!imageurl?"https://assets-prd.ignimgs.com/2025/01/25/ser-review-blogroll-1737848252616.jpg?width=1280":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}<span class="badge rounded-pill text-bg-success">New</span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
    <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  } 
}

export default NewsItem;

