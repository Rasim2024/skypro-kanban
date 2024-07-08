import './App.css'
import Header from "./components/Header/Header.jsx";
import PopBrowse from './components/Popups/PopBrowse/PopBrowse.jsx';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard.jsx';
import Main from './components/Main/Main.jsx';
import PopExit from './components/Popups/PopExit/PopExit';
import { useEffect, useState } from "react";
import { cardList } from './Data.js';
import { GlobalStyle } from './Global.styled.js';
import AppRoutes from './AppRoutes.jsx';

function App() {

  
  
 

  

  

  return (
    <>
    <GlobalStyle/>
      <div className="wrapper">
        <AppRoutes/>
        
       {/* <PopExit/>
        <PopNewCard addCard={addCard}/> 
        <PopBrowse/>
        
        <Header/>   
        {isLoading ? <h1 className='load'>Данные загружаются...</h1> : <Main cardList={cards} />} */}
      </div>

    </>
  )
}

export default App
