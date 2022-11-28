import './App.css';
import NavBar from './components/NavBar'
import React, { useState } from 'react'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App=()=>  {
  const [progress, setProgress]=useState(0)
   let pageSize = 15
  // apiKey="d6ca882ddac54102b763e21a0dfbcc66"
   const apiKey=process.env.REACT_APP_NEWS_API 


  const progresTopLoad=(progress)=>{
  setProgress(progress)  
}

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          {/* <News progress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country={'us'} category="" /> */}
          <Routes>
            <Route exact path="/home" element={<News setProgress={progresTopLoad} apiKey={apiKey} key="newsmonkey" pageSize={pageSize} country={'us'} category="general" />}> </Route>

            <Route exact path="/home" element={<News setProgress={progresTopLoad} apiKey={apiKey} key="home" pageSize={pageSize} country={'us'} category="general" />}> </Route>

            <Route exact path="/business" element={<News setProgress={progresTopLoad} apiKey={apiKey} key="business" pageSize={pageSize} country={'us'} category="business" />}> </Route>

            <Route path="/entertainment" element={<News setProgress={progresTopLoad} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={'us'} category="entertainment" />}></Route>

            <Route path="/general" element={<News setProgress={progresTopLoad} apiKey={apiKey} key="general" pageSize={pageSize} country={'us'} category="general" />}></Route>

            <Route path="/health" element={<News setProgress={progresTopLoad} apiKey={apiKey} key="health" pageSize={pageSize} country={'us'} category="health" />}></Route>

            <Route path="/science" element={<News setProgress={progresTopLoad} apiKey={apiKey} key="science" pageSize={pageSize} country={'us'} category="science" />}></Route>

            <Route path="/sports" element={<News setProgress={progresTopLoad} apiKey={apiKey} key="sports" pageSize={pageSize} country={'us'} category="sports" />}></Route>

            <Route path="/technology" element={<News setProgress={progresTopLoad} apiKey={apiKey} key="technology" pageSize={pageSize} country={'us'} category="technology" />}></Route>

          </Routes>
        </Router>
      </div>
    )
  
}

export default App
