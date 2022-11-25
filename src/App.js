import './App.css';
import NavBar from './components/NavBar'
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=15
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          {/* <News key="home" pageSize={this.pageSize} country={'us'} category="" /> */}
          <Routes>
            <Route exact path="/home" element={<News key="newsmonkey" pageSize={this.pageSize} country={'us'} category="general" />}> </Route>

            <Route exact path="/home" element={<News key="home" pageSize={this.pageSize} country={'us'} category="" />}> </Route>

            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country={'us'} category="business" />}> </Route>

            <Route path="/entertainment"  element={<News key="entertainment" pageSize={this.pageSize} country={'us'} category="entertainment" />}></Route>

            <Route path="/general" element={<News key="general" pageSize={this.pageSize} country={'us'} category="general" />}></Route>

            <Route path="/health" element={<News key="health" pageSize={this.pageSize} country={'us'} category="health" />}></Route>

            <Route path="/science"  element={<News key="science" pageSize={this.pageSize} country={'us'} category="science" />}></Route>

            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country={'us'} category="sports" />}></Route>

            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country={'us'} category="technology" />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}
