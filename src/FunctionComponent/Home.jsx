import React, { useEffect, useState } from "react";
import ItemApi from "./ItemApi";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home (props) {
  let [articles,setArticles]=useState([])
  let [totalResults,setTotalResults]=useState(0)
  let [page,setPage]=useState(1)
  // ------------- data fetch api-------------

   async function getAPIData () {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        props.search ? props.search : props.q
      }&language=${
        props.lang
      }&sortBy=publishedAt&apiKey=990ac9bfe73249b7b1fb8dc2b793f6ce`
    );
    response = await response.json();

    // set data in state
   if(response.articles){
    setArticles(response.articles.filter(x=>x.title!=="[Removed]")); //  set data in state
    setTotalResults(response.totalResults)
   }
  }
  
  async function fetchData(){
    setPage(page+1)     
                                                //// fecth data function work to scroll page
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&language=${props.lang}&sortBy=publishedAt&apiKey=990ac9bfe73249b7b1fb8dc2b793f6ce`);
    response = await response.json(); 
   if(response.articles){
    setArticles(articles.concat(response.articles.filter(x=>x.title!=="[Removed]")) //  old page data add (concat)to newpage data
    );
   }

  }
  useEffect(()=>{
    getAPIData()
  },[props])
    return(
    
        <div className="container-fluid ">
          <h3 className="text-center p-2 my-1 background text-capitalize ">
            {props.search ? props.search : props.q} NewsArticles
          </h3>
            <InfiniteScroll style={{overflow:"hidden"}}
              dataLength={articles.length} //This is important field to render the next data
              next={fetchData}
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
            {articles &&
              articles.map((item, index) => {
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

