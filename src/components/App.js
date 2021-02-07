import React, { useState } from 'react';
import Col from "./Col";
import api from "./Api";
import { menu } from "../utils/utils";
const urlParams = new URLSearchParams(window.location.search);
const displayId = urlParams.get('display');

function App(props) {

  const [display, Setdisplay] = useState(menu);
  const [swich, Setswich] = useState(false);

  setTimeout(() => {
    Setswich(!swich);
    console.log(swich);
  }, 10000)

  React.useEffect(() => {
    api.getState(displayId)
    .then(res => {
      Setdisplay(res);
      console.log(res);
    })
    .catch(e => console.error(e.message));
  }, [swich])

  return (
    <div className="main">
      <div className="col-wrapper">
        {display.cols.map(col => <Col sections={col.sections} />)}
      </div>
    </div>)
}

export default App;