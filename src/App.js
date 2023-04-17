
import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
// import NewItem from './component/NewItem';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  pageSize=10;
  render() {
    return (
      <BrowserRouter>
      <NavBar></NavBar>
      
      <Routes>
      
    <Route exact path='/Home'element={<News key="general" pageSize={this.pageSize} category={'general'} country={'in'} />}></Route>
    <Route exact path='/business'element={<News key="business" pageSize={this.pageSize} category={'business'} country={'in'} />}/>
    <Route exact path='/entertainment'element={<News key="entertainment" pageSize={this.pageSize} category={'entertainment'} country={'in'} />}></Route>
    <Route exact path='/general'element={<News key="general" pageSize={this.pageSize} category={'general'} country={'in'} />}></Route>
    <Route exact path='/health'element={<News key="health" pageSize={this.pageSize} category={'health'} country={'in'} />}></Route>
    <Route exact path='/science'element={<News key="science" pageSize={this.pageSize} category={'science'} country={'in'} />}></Route>
    <Route exact path='/sports'element={<News key="sports" pageSize={this.pageSize} category={'sports'} country={'in'} />}></Route>
    <Route exact path='/technology'element={<News key="technology" pageSize={this.pageSize} category={'technology'} country={'in'} />}></Route>      
      </Routes>
      </BrowserRouter>
    )
  }
}
