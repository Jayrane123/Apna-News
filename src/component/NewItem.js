import React from 'react'
 
const NewItem =(props)=> {
  
    let {title, description,ImageUrl,newsUrl,date,author,source}=props;
    return (
      <div>
       <div className="card" >
  <img  src={ImageUrl?ImageUrl:"news.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span className="badge rounded-pill bg-danger" style={{display : 'flex',justifyContent:'normal',right: '0px',position :'absolute',top :'0px',}}>{source }
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


export default NewItem
