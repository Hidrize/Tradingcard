import logo from './logo.svg';
import './App.css';
import Tradingcard from './component/Tradingcard';
import Player from './component/Player';

function App() {

  const playerData = [
    {
      playerName: "Ronaldo",
      imageurl:  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b686b25-3ea6-43ca-b85d-f3b2e1b597e8/d4w0r0r-77e432a5-006e-421a-bcb0-168e19881f35.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViNjg2YjI1LTNlYTYtNDNjYS1iODVkLWYzYjJlMWI1OTdlOFwvZDR3MHIwci03N2U0MzJhNS0wMDZlLTQyMWEtYmNiMC0xNjhlMTk4ODFmMzUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._9ssVOM7h_p1CRuQ91HvN5wVBAH7UiMJ2RSRmMyI1_8",
      jerseyNumber: "7",
      team: "Manchester United",
      country: "Portugal",
      salary: "26.52 million GBP",
    },

    {
      playerName: "Messi",
      imageurl:  "https://wallpapers.com/images/high/messi-orange-fire-art-b9xarbqv49zqwrat.jpg",
      jerseyNumber: "30",
      team: "Paris Saint German",
      country: "Argentina",
      salary: "41 million USD",
    },

    {
      playerName: "Neymar",
      imageurl:  "https://pbs.twimg.com/media/DTxl0rrUMAAg4s_.jpg",
      jerseyNumber: "11",
      team: "Paris Saint German",
      country: "Brazil",
      salary: "36.8 million EUR",
    },

  ]
  return (
    <div className="App">
      {
        playerData.map((player)=>(
          <Tradingcard player ={player}/>
        ))
      }
    </div>
  );
}

export default App;
