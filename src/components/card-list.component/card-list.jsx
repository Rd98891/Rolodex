import React from "react";
import './card-list.styles.css';
import { Card } from "../card.component/card";

export const CardList = (props) => {
    return <div className="card-list">
        {
          props.monsters.map(monsterItem => 
             <Card key={monsterItem.id} monster={monsterItem}/>
          )
        }
    </div>
}

