import React from "react";
import Card from "../Card/Card";
import * as S from "./Column.styled"

function Column({ title, cardList }) { // принимаем пропсы от родителя
  return (
    <S.Column>
      <S.ColumnTitle>
        <p>{title}</p> {/* выводим статус  */}
      </S.ColumnTitle>
      <S.ColumnCard>
        {cardList.map(({ id, topic, title, date }) => { // перебираем массив поступивший пропсом от родителя 
        // ранее созданный (отфильтрованный) при сопостовлении статуса присваиваем переменным и отправляем пропсом дочернему компоненту card  

          return <Card key={id} topic={topic} title={title} date={date} />;
        })}
      </S.ColumnCard>
    </S.Column>
  );
}

export default Column;
