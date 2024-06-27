
import Column from "../Column/Column"
import { statusList, } from "../../Data"


function Main ({cardList}) {
    
      return (
        <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
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
             
            </div>
          </div>
        </div>
      </main>
    )
    }


export default Main