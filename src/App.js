import './App.css';
import NavBar from './components/NavBar'
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize = 15

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({
      progress: progress
  })}
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          {/* <News progress={this.setProgress} key="home" pageSize={this.pageSize} country={'us'} category="" /> */}
          <Routes>
            <Route exact path="/home" element={<News setProgress={this.setProgress} key="newsmonkey" pageSize={this.pageSize} country={'us'} category="general" />}> </Route>

            <Route exact path="/home" element={<News href="#/action-1" setProgress={this.setProgress} key="home" pageSize={this.pageSize} country={'us'} category="general" />}> </Route>

            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={'us'} category="business" />}> </Route>

            <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={'us'} category="entertainment" />}></Route>

            <Route path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={'us'} category="general" />}></Route>

            <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={'us'} category="health" />}></Route>

            <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={'us'} category="science" />}></Route>

            <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={'us'} category="sports" />}></Route>

            <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={'us'} category="technology" />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}
