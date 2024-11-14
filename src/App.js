// class based
// import './App.css';
// //react class based component use in this app
// import React, { Component } from 'react'
// import Navbar from './component/Navbar';
// import News from './component/News';
// import LoadingBar from 'react-top-loading-bar'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// export default class App extends Component {
//   pageSize = 15;
//   apikey = process.env.REACT_APP_NEWS_API;
//   state= {
//     progress:0
//   }
 
//   setProgress = (progress)=>{
//     this.setState({progress:progress})
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar/>
//           <LoadingBar
//           height={3}
//           color='#f11946'
//           progress={this.state.progress}
//           />
//           <Routes>
//             <Route path="/" element={<News setProgress={setprogress} apikey={apikey}  key="general"  pageSize={pageSize} country="in" category="general"/>} />
//             <Route path="/business" element={<News  setProgress={setprogress} apikey={apikey}  key="business"  pageSize={pageSize} country="in" category="business"/>} />
//             <Route path="/entertainment" element={<News  setProgress={setprogress} apikey={apikey}  key="entertainment"  pageSize={pageSize} country="in" category="entertainment"/>} />
//             <Route path="/general" element={<News  setProgress={setprogress} apikey={apikey}  key="general"  pageSize={pageSize} country="in" category="general"/>} />
//             <Route path="/health" element={<News  setProgress= {this.state.setProgress} apikey={apikey}  key="health"  pageSize={pageSize} country="in" category="health"/>} />
//             <Route path="/science" element={<News  setProgress={setprogress} apikey={apikey}  key="science"  pageSize={pageSize} country="in" category="science"/>} />
//             <Route path="/sports" element={<News  setProgress= {setprogress} apikey={apikey}  key="sports"  pageSize={pageSize} country="in" category="sports"/>} />
//             <Route path="/technology" element={<News  setProgress={setprogress} apikey={apikey}  key="technology"  pageSize={pageSize} country="in" category="technology"/>} />
//           </Routes>
//         </Router>  
//       </div>
//     )
//   }
// }


// function based
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const pageSize = 15;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // You can update the progress state here, for example:
    // setProgress(50);
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;