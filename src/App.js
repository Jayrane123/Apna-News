
import './App.css';

import React,{useState}  from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
// import NewItem from './component/NewItem';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
const App = (props)=> {
  const pageSize=10;
  // apikey="1b3b58c2d0c6450c82d49715cc63c8f1";
  const apiKey=process.env.REACT_APP_API_KEY;
  // const [state,setState]=useState(progress)
  const [progress,setProgress]=useState(0)

  // state={
  //     progress:10
  // }
  // const progress =10;
// setProgress=(progress)=>{
//   setState({progress:progress})
// }
//  setProgress=(progress)=>{

//  }
    return (
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <NavBar></NavBar>
      
      <Routes>
      
    <Route exact path='/Home'element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category={'general'} country={'in'} />}></Route>
    <Route exact path='/business'element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category={'business'} country={'in'} />}/>
    <Route exact path='/entertainment'element={<News setProgress={props.setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category={'entertainment'} country={'in'} />}></Route>
    <Route exact path='/general'element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category={'general'} country={'in'} />}></Route>
    <Route exact path='/health'element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category={'health'} country={'in'} />}></Route>
    <Route exact path='/science'element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category={'science'} country={'in'} />}></Route>
    <Route exact path='/sports'element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category={'sports'} country={'in'} />}></Route>
    <Route exact path='/technology'element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category={'technology'} country={'in'} />}></Route>      
      </Routes>
      </BrowserRouter>
    )
}
export default App;