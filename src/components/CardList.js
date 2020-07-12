import React, {Fragment} from 'react';
import Card from './Card';

  const CardList = ({ robotsList }) => {
    return (
      <Fragment>
      {
       robotsList.map((item, i) => {
         return (
           <Card
             key={i}
             id={item.id}
             name={item.name}
             email={item.email}
             />
         );
       })
      }
    </Fragment>
   );
 }

export default CardList;
