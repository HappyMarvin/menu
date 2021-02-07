import React from 'react';
import Food from './Food';

function Section ({ section, handleChangePrice, index }) {
  handleChangePrice = handleChangePrice.bind(this, index)
  return (
    <section>
      <input name="section-title" type="text" value={section.h2} />
      <input name="section-subtitle" type="text" value={section.h3} />
      {section.foods.map((food, i) => <Food food={food} index={i} handleChangePrice={handleChangePrice} />)}
    </section>
  )
}

export default Section