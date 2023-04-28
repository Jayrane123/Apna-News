import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country:'in',
    category:'general',
    pageSize:8
  };
    static propTypes = {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
    };  
  constructor(props) {
    super(props);
    this.state = {
      // articles : this.articles,
      loading: true,
      articles: [],
      page: 1 ,
      totalResults:0
    };
    document.title=`${this.capitalized(this.props.category)}-Apna Newz`;
  }
  capitalized=(string)=>{
    return string.charAt(0).toUpperCase()
  + string.slice(1)
  }
  async updatenews(){
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12db0fc496164030b28cf078b9316e9d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})  
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading:false 
    });
  }
  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    this.setState({page : this.state.page + 1});
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12db0fc496164030b28cf078b9316e9d&page=${this.state.page}&pageSize=${this.props.pageSize}`; 
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading:false 

    });
  };
  async componentDidMount() {
    this.updatenews();
  }
  // handlePrevClick = async () => {
  //   this.setState({page : this.state.page - 1});
  //   this.updatenews();
  // };
  // handleNextClick = async () => {
  //   this.setState({page : this.state.page + 1});
  //   this.updatenews();
  // };
  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{margin:'35px 0px'}}>
          <strong >APNI NEWS - Top {this.capitalized(this.props.category)} Headlines</strong>
        </h2>
        {this.state.loading &&<Spinner />}
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            // hasMore={this.state.articles.length!==this.state.totalResults}
            hasMore={this.dataLength!==this.state.totalResults}
            loader={<Spinner/>}
          >
        <div className="row gy-5">
          {this.state.articles.map((element) => {           
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
      </div>
    );
  }
}
export default News;
