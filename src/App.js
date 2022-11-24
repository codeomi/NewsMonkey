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
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route exact path="/home" element={<News key="home" pageSize={5} country={'us'} category="" />}> </Route>

            <Route exact path="/business" element={<News key="business" pageSize={5} country={'us'} category="business" />}> </Route>

            <Route path="/entertainment"  element={<News key="entertainment" pageSize={5} country={'us'} category="entertainment" />}></Route>

            <Route path="/general" element={<News key="general" pageSize={5} country={'us'} category="general" />}></Route>

            <Route path="/health" element={<News key="health" pageSize={5} country={'us'} category="health" />}></Route>

            <Route path="/science"  element={<News key="science" pageSize={5} country={'us'} category="science" />}></Route>

            <Route path="/sports" element={<News key="sports" pageSize={5} country={'us'} category="sports" />}></Route>

            <Route path="/technology" element={<News key="technology" pageSize={5} country={'us'} category="technology" />}></Route>

          </Routes>
        </Router>
      </div>
    )
  }
}
