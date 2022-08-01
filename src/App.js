import './App.css';
import TeamDashboard from './components/TeamDashboard';

function App() {
  return (
    <div className="App">
      <TeamDashboard team={hardCodedTeam()}/>
    </div>
  );
}

function hardCodedTeam() {
  return {
    name: 'Botafogo',
    image: 'https://logodownload.org/wp-content/uploads/2016/11/botafogo-logo-0.png',
    jerseys: [
      {
        id: "1",
        image: 'https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_g/25588/12393736.jpg',
        year: {
          from: 1958,
          to: 1962
        },
        brand: 'Athleta'
      },
      {
        id: "2",
        image: 'https://www.oldfootballshirts.com/img/shirts/794/thumbs/football_shirt_46761_1_353x412x1.jpg',
        year: {
          from: 1973,
          to: 1979
        },
        brand: 'Penalty'
      },
    ]
  }
}

export default App;
