
import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
// import NewItem from './component/NewItem';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  pageSize=10;
  state={
      progress:10
  }
setProgress=(progress)=>{
  this.setState({progress:progress})
}
  render() {
    return (
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <NavBar></NavBar>
      
      <Routes>
      
    <Route exact path='/Home'element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category={'general'} country={'in'} />}></Route>
    <Route exact path='/business'element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} category={'business'} country={'in'} />}/>
    <Route exact path='/entertainment'element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category={'entertainment'} country={'in'} />}></Route>
    <Route exact path='/general'element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category={'general'} country={'in'} />}></Route>
    <Route exact path='/health'element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category={'health'} country={'in'} />}></Route>
    <Route exact path='/science'element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} category={'science'} country={'in'} />}></Route>
    <Route exact path='/sports'element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category={'sports'} country={'in'} />}></Route>
    <Route exact path='/technology'element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category={'technology'} country={'in'} />}></Route>      
      </Routes>
      </BrowserRouter>
    )
  }
}
