import React from "react";
import Card from "../Card/Card";

function Column({ title, cardList }) { // принимаем пропсы от родителя
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p> {/* выводим статус  */}
      </div>
      <div className="cards">
        {cardList.map(({ id, topic, title, date }) => { // перебираем массив поступивший пропсом от родителя 
        // ранее созданный (отфильтрованный) при сопостовлении статуса присваиваем переменным и отправляем пропсом дочернему компоненту card  

          return <Card key={id} topic={topic} title={title} date={date} />;
        })}
      </div>
    </div>
  );
}

export default Column;
