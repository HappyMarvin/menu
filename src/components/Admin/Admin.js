import React, { useState } from 'react';
import { menu } from "../../utils/utils";
import Col from "./Col";
import api from "../Api";
import DisplaySwitchButton from "./DisplaySwitchButton";
import { ObjectID } from 'mongodb';


function Admin(props) {
  const [display, Setdisplay] = useState(menu);
  const [displayId, SetdisplayId] = useState(1);

  React.useEffect(() => {
    api.getState(displayId)
    .then(res => {
      Setdisplay(res);
      console.log(res);
    })
    .catch(e => console.error(e.message));
  }, [displayId])
  console.log(btoa(Math.random()));

  const SwitchButtonClick = (displayId) => {
    SetdisplayId(displayId);
  }

  const handleChangePrice = (col, section, food, e) => {
    const newDisplay = Object.assign({}, display)
    newDisplay.cols[col].sections[section].foods[food].price = e.target.value;
    Setdisplay(newDisplay);
  }

  return (
    <div className="admin__main">
      <DisplaySwitchButton
        isActive = {1 === displayId}
        handleClick={SwitchButtonClick} 
        displayId={1} >
      </DisplaySwitchButton>
      <DisplaySwitchButton 
        isActive = {2 === displayId}
        handleClick={SwitchButtonClick} 
        displayId={2} >
      </DisplaySwitchButton>
      {display.cols.map((col, i) => <Col sections={col.sections} key={col._id} index={i} handleChangePrice={handleChangePrice} />)}
    </div>
  )
}

export default Admin