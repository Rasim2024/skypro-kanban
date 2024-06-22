import React from "react";
import Card from "../Card/Card";


class Column extends React.Component {
  render() {
    return (

      <>
       <div className="main__column column">
                    <div className="column__title">
                      <p>{this.props.status}</p>
                    </div>
                    <div className="cards">
                      <Card/>
                                    
                    </div>
                  </div>
                  
      </>
       )
  }
   
}

export default Column;