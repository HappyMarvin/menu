import React from 'react';

 const Food = props => (
  <div className="col__wrapper">
  <div className="col__food">{props.food.food}</div>
  <div className="col__price">{props.food.price}</div>
</div>
 )
 
export default Food