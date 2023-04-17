import React, { Component } from 'react'
 
export class NewItem extends Component {
  render() {
    let {title, description,ImageUrl,newsUrl,date,author,source}=this.props;
    return (
      <div>
       <div className="card">
  <img  src={ImageUrl?ImageUrl:"piyush.JPG"} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>{source }
  </span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} updated {new Date(date).toUTCString()}</small></p>
    <a href={newsUrl} rel="noreferrer"  target={'_blank'} className="btn btn-primary">read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewItem
