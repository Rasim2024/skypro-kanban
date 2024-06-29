import *as S from "./Main.styled"
import Column from "../Column/Column"
import { statusList, } from "../../Data"


function Main ({cardList}) {
    
      return (
        <S.Main>
        <div className="container">
          <S.MainBlock>
            <S.MainContent>
              {/* код отображает компонент <Column>, передавая ему ключ key, заголовок title и 
              отфильтрованный список карточек cardList, где статус карточки соответствует текущему статусу из statusList. */}
             {statusList.map((status, id) => (  
              // перебираем массив и возвращаем элементы status , id 
              <Column key={id} title={status} 
              // фильтруем массив выбирая карты схожими статусами
              cardList={cardList.filter((card)=>card.status === status)}
              // все эти свойства передаются виде пропсов дочернему элементу column
              />
             ))}
             
            </S.MainContent>
          </S.MainBlock>
        </div>
      </S.Main>
    )
    }


export default Main