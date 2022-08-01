import JerseyDetail from './JerseyDetail';
import './styles/style.css';
function TeamDashboard(props) {
  const { team } = props
  return (
    <div>
      <div className="team-header">
        {/* <img src={team.image} alt="Team"></img> */}
        <span className="team-name">{team.name}</span>
      </div>
      <div className="team-jerseys">
        {team.jerseys.map(renderJersey)}
      </div>
    </div>
  );
}

function renderJersey(jersey){
  return(
    <JerseyDetail jersey={jersey}/>
  )
}

export default TeamDashboard;
