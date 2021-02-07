import Section from './Section';
function Col({ sections, handleChangePrice, index }) {
  handleChangePrice = handleChangePrice.bind(this, index)
  return (
    <div>
      {sections.map((section, i) => <Section section={section} index={i} handleChangePrice={handleChangePrice} />)}
    </div>
  )
}

export default Col