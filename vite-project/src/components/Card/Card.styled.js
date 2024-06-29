import styled from "styled-components"
import { topicStyles } from "../../lib/topic";


export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;


export const CardContainer = styled.div`

width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`
export const TopicText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTopic = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"}; //Тот самый файл(обьект) из lib/topics.js соответственно импортируем

  ${TopicText} {
    color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
  }
`;

export const CardGroup = styled.div`

  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;


`;

export const CardContent = styled.div`

  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

`;

export const CardDate = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-start;

`