
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { cardList } from '../../Data';
import PopNewCard from '../../components/Popups/PopNewCard/PopNewCard';
import { Outlet } from 'react-router-dom';

export default function HomePage({setIsAuth}) {
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
        // Используется функция setCards для обновления состояния cards. 
        // При помощи оператора расширения [...cards] мы создаем новый массив, копируя все существующие карточки, 
        // а затем добавляем новую карточку newTask в конец этого массива. Таким образом, состояние cards обновляется, добавляя новую задачу.
    
          }

          
  
  return (
    <>
      <Header setIsAuth={setIsAuth} />
      {isLoading ? <h1 className='load'>Данные загружаются...</h1> : <Main cardList={cards} />}
      <Outlet />
    </>
  )
}
