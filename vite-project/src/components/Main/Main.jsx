import React from "react"
import Column from "../Column/Column"



class Main extends React.Component {
    render() {
      return (
        <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
             <Column status="Без статуса"/>
             <Column status="Нужно сделать"/>
             <Column status="В работе"/>
             <Column status="Тестирование"/>
             <Column status="готово"/>
            </div>
          </div>
        </div>
      </main>
    )
    }
}

export default Main