//class base
// import React, { Component } from "react";
// import Newsitem from "./Newsitem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${this.capitalizeFirstLetter(props.category)} - Daily News`;
//   }

//   async updateNews() {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({loading: true})
//     let data = await fetch(url);
//     props.setProgress(40);
//     let parsedata = await data.json();
//     props.setProgress(70);
//     this.setState({
//       articles: parsedata.articles,
//       totalResults: parsedata.totalResults,
//       loading: false,
//     });
//     props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.updateNews();
//   }

//   handlePrevClick = async () => {
//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };

//   handleNextClick = async () => {
//     this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   };

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedata = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedata.articles),
//       totalResults: parsedata.totalResults,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center" style={{ margin: "35px 0px" }}>
//           DailyNews-Top {this.capitalizeFirstLetter(props.category)} Headlines
//         </h1>
//         {this.state.loading && <Spinner />}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((element) => (
//                 <div className="col-md-4" key={element.url}>
//                   <Newsitem
//                     title={element.title ? element.title : ""}
//                     description={element.description ? element.description : ""}
//                     imageurl={element.urlToImage}
//                     newsurl={element.url}
//                     author={element.author}
//                     date={element.publishedAt}
//                     source={element.source.name}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </>
//     );
//   }
// }

// export default News;

// https://newsapi.org/v2/everything?q=tesla&from=2024-07-03&sortBy=publishedAtcountry = ${props.counrty}&category=${props.category}${props.category}ca1cb39af96e44b8bfab303ea8d778b9&page=1


//function based
import React, {useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)} - Daily News`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 const updateNews=async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setloading(true)
    props.setProgress(40);
    let parsedata = await data.json();
    props.setProgress(70);
    setArticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)
    props.setProgress(100);
  }

   useEffect(() => {
      updateNews();
     }
   , [])
   
  const handlePrevClick = async () => {
    setpage(page - 1)
    updateNews();
  };

  const handleNextClick = async () => {
     setpage(page + 1)
     updateNews();
  };

   const fetchMoreData = async () => {
    setpage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          DailyNews-Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
}

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };


export default News;


