import Card from "../Card/Card";

function Column () {
   return (
  <>
   <div className="main__column column">
                <div className="column__title">
                  <p>Без статуса</p>
                </div>
                <div className="cards">
                  <Card/>
                                
                </div>
              </div>
              
  </>
   )
}

export default Column;