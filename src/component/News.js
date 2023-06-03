import React ,{useEffect , useState} from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props)=> {
  const [loading ,setloading]=useState(true)
  const [articles ,setarticles]=useState([])
  const [page ,setpage]=useState(1)
  const [totalResults ,settotalResults]=useState(0)

 
  
  const capitalized=(string)=>{
    return string.charAt(0).toUpperCase()
  + string.slice(1)
  }
  const updatenews=async ()=>{
    props.setProgress(10);
    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;  
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json();
    setarticles(parsedata.articles);
    props.setProgress(70);
    settotalResults(parsedata.totalResults);
    setloading(false)
    props.setProgress(100);
  }
  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1)
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults);
    // setloading(false)    
  };
  useEffect(() => {
     document.title=`${capitalized(props.category)}-Apna Newz`;
    updatenews();
    // eslint-disable-next-line
  }, []);
  // handlePrevClick = async () => {
  // setpage(page-1)
  //  updatenews();
  // };
  // handleNextClick = async () => {
  // setpage(page+1)
  //  updatenews();
  // };
    return (
      <>
        
        <h2 className='text-center' style={{margin:'35px 0px' ,bottom: '-23px' , position: 'relative'}}>
          <strong >APNI NEWS - Top {capitalized(props.category)} Headlines</strong>
        </h2>
        {articles.length!==totalResults?loading &&<Spinner />:null}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            // hasMore={articles.length!==totalResults}
            hasMore={articles.length!==totalResults}
            loader={<Spinner/>}
          >
        <div className="row gy-5">
          {articles.map((element) => {           
            return (
              <div className="col-sm-4" key={element.url}>               
                <NewItem
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 85) : " "
                  }
                  ImageUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />               
              </div>
               
            );
          })}
            
            
        </div>
        </InfiniteScroll>
      </>
    );
  
}
News.defaultProps = {
  country:'in',
  category:'general',
  pageSize:8,
  
};
 News.propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
    // apiKey:PropTypes.string
  }; 
export default News;
