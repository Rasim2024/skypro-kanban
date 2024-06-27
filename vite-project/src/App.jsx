import './App.css'
import Header from "./components/Header/Header.jsx";
import PopBrowse from './components/Popups/PopBrowse/PopBrowse.jsx';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard.jsx';
import Main from './components/Main/Main.jsx';
import PopExit from './components/Popups/PopExit.jsx';
import { useEffect, useState } from "react";
import { cardList } from './Data.js';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(cardList)
 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  function addCard () {
    const newTask = {
      id: cards.length + 1,
      topic: "Web Design",
      title: "Название задачи",
      date: "27.06.24",
      status: "Без статуса",
    }
    setCards([...cards, newTask])
      }

  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
       <PopExit/>
        <PopNewCard addCard={addCard}/> {/* передаем пропс с функцией addCards в компонент popNewcard*/}
        <PopBrowse/>
        {/* pop-up end*/}
        <Header/>    {/* Выгружается с хедер*/}
        {isLoading ? <h1 className='load'>Данные загружаются...</h1> : <Main cardList={cards} />}
      </div>

    </>
  )
}

export default App
