function DisplaySwitchButton ({ displayId, handleClick }) {

  handleClick = handleClick.bind(this, displayId);
  return (
  <button onClick={handleClick} >Дисплей {displayId}</button>
    )
}
export default DisplaySwitchButton