import './App.css'
import Header from "./components/Header/Header.jsx";
import PopBrowse from './components/Popups/PopBrowse/PopBrowse.jsx';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard.jsx';
import Main from './components/Main/Main.jsx';
import PopExit from './components/Popups/PopExit.jsx';
import { cardList } from './Data.js';
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);
 
  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
       <PopExit/>
        <PopNewCard/>
        <PopBrowse/>
        {/* pop-up end*/}
        <Header/>    {/* Выгружается с хедер*/}
        {isLoading ? <h1 className='load'>Данные загружаются...</h1> :  <Main cardList={cardList} />}   {/*
       передача пропса cardList в компонент <Main />. cardList является переменной, содержащей данные о карточках из файла Data.js). 
       Компонент <Main/> отображает основное содержимое приложения и передает ему данные cardList. */}
      </div>

    </>
  )
}

export default App
