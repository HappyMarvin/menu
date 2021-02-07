import React from 'react';

 const Food = ({ food, handleChangePrice, index }) =>{ 
  handleChangePrice = handleChangePrice.bind(this, index);
  return (
  <div className="col__wrapper">
    <input name="section-title" type="text" value={food.food} />
    <input onChange={handleChangePrice} name="section-subtitle" type="text" value={food.price} />
</div>
 )}
 
export default Food