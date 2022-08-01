import './styles/style.css';
function JerseyDetail(props) {
  const { jersey } = props
  return (
    <span className="team-jersey-from" key={jersey.id}>{jersey.year}</span>
  )
}

export default JerseyDetail;
