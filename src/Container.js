import React, { useState } from 'react'
import Bar from './Components/Bar'
import Main from './Components/Main'


export const Container = () =>{
  const [toggleIn , setToggleIn] = useState(false);
  const [iconStatus, setIconStatus] = useState("inIcon");
  const [mainPage, setMainPage] = useState("openMain");
  const [sideBar, setSideBar] = useState("openBar")


  const toggleSidebar = (e) => {
    e.preventDefault();   

    if(toggleIn){
      setToggleIn(false);
      setMainPage("openMain");
      setIconStatus("inIcon");
      setSideBar("openBar");
     }
    else{
      setToggleIn(true);
      setMainPage("closedMain");
      setIconStatus("outIcon");
      setSideBar("closedBar");
    }
  }


  return (
    <div id='container'>
      <div  className={`icon ${iconStatus}`} onClick={toggleSidebar}>
        &equiv;
      </div>
      <div id='sidebar' className={sideBar}>
        <Bar></Bar>
      </div>
      <div id="main" className={mainPage}>
          <Main></Main>       
      </div>
    </div>
   
  );
}


export default Container;