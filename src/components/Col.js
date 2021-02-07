import Section from './Section';
function Col (props) {
    return (
      <div className="col">
        {props.sections.map(section => <Section section={section} />)}
      </div>
    )
}

export default Col