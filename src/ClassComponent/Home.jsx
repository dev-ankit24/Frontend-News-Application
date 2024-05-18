import React, { Component } from "react";
import ItemApi from "./ItemApi";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      // create state
      articles: [],
      totalResults: 0,
    };
  }
  // ------------- data fetch api-------------

  async getAPIData() {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&language=${
        this.props.lang
      }&sortBy=publishedAt&apiKey=990ac9bfe73249b7b1fb8dc2b793f6ce`
    );
    response = await response.json();

    // set data in state
   if(response.articles){
    this.setState({
      articles: response.articles.filter(x=>x.title!=="[Removed]"), //  set data in state
      totalResult: response.totalResults, // set data in state
    });
   }
  }
  
  fetchData=async ()=>{
    this.setState({page:this.state.page+1})      
                                                //// fecth data function work to scroll page
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&language=${
        this.props.lang
      }&sortBy=publishedAt&apiKey=990ac9bfe73249b7b1fb8dc2b793f6ce`
    );
    response = await response.json(); 
   if(response.articles){
    this.setState({
      articles: this.state.articles.concat(response.articles.filter(x=>x.title!=="[Removed]")), //  old page data add (concat)to new page data
      
    });
   }

  }
  componentDidMount() {
    // using react life cycle  method
    this.getAPIData(); // call function
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) this.getAPIData();
  }

  render(){
    return(
    
        <div className="container-fluid ">
          <h3 className="text-center p-2 my-1 background text-capitalize ">
            {this.props.search ? this.props.search : this.props.q} NewsArticles
          </h3>
            <InfiniteScroll style={{overflow:"hidden"}}
              dataLength={this.state.articles.length} //This is important field to render the next data
              next={this.fetchData}
              hasMore={true}
              loader={<div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>No mre Aricales</b>
                </p>
              }
            >
          <div className="row  scoller">
            {this.state.articles &&
              this.state.articles.map((item, index) => {
                return (
                  <div
                    className="col-xl-2 col-md-4 col-lg-3 col-sm-6"
                    key={index}
                  >
                    <ItemApi
                      discription={item.description}
                      title={item.title}
                      name={item.source.name}
                      pic={item.urlToImage}
                      url={item.url}
                      date={item.publishedAt}
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
