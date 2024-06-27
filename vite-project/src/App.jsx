import './App.css'
import Header from "./components/Header/Header.jsx";
import PopBrowse from './components/Popups/PopBrowse/PopBrowse.jsx';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard.jsx';
import Main from './components/Main/Main.jsx';
import PopExit from './components/Popups/PopExit.jsx';

function App() {

  return (
    <>
      <div className="wrapper">
        {/* pop-up start*/}
       <PopExit/>
        <PopNewCard addCard={addCard}/> {/* передаем пропс с функцией addCards в компонент popNewcard*/}
        <PopBrowse/>
        {/* pop-up end*/}
        <Header/>    {/* Выгружается с хедер*/}
       <Main/>
      </div>

    </>
  )
}

export default App
