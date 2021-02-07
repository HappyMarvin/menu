import React from 'react';
import Food from './Food';

function Section (props) {
  return (
    <section>
      <h2 className="col__h2">{props.section.h2}</h2>
      <h3 className="col__h3">{props.section.h3}</h3>
      {props.section.foods.map(food => <Food food={food} />)}
    </section>
  )
}

export default Section