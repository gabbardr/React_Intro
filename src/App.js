// import logo from './logo.svg';
// Images are as Follows: 
// https://gamepedia.cursecdn.com/fallout_gamepedia/thumb/1/12/RemnantsPowerArmor.png/640px-RemnantsPowerArmor.png?version=f1864bc9ca3dbe646620994aa8867733
// from Fallout.gamepedia.com
// https://gamepedia.cursecdn.com/fallout_gamepedia/6/61/FO4_NW_Quantum_X-0.png
// from fallout.fandom.com
// https://gamepedia.cursecdn.com/fallout_gamepedia/thumb/1/1a/Fo4_Power_Armor_T60.png/1200px-Fo4_Power_Armor_T60.png
// from fallout.fandom.com
// All images were obtain through google uner free to share and use/ all creative commons
// Learned functions, componenets, conditionals, and data arrays from Professor Jeff Siatro MI-449 week 10.3 videos
import './App.css';

const fallout = [
  {id:1, title: 'Fallout New Vegas', 
  powerarmor: 'Remnants', img: 'https://gamepedia.cursecdn.com/fallout_gamepedia/thumb/1/12/RemnantsPowerArmor.png/640px-RemnantsPowerArmor.png?version=f1864bc9ca3dbe646620994aa8867733',
  wasitFavored: true},
  {id:2, title: 'Fallout 4', 
  powerarmor: 'Quantum X-01', img: 'https://gamepedia.cursecdn.com/fallout_gamepedia/6/61/FO4_NW_Quantum_X-0.png',
  wasitFavored: true},
  {id:3, title: 'Fllout 76',
  powerarmor: 'Ultracite Power Armor', img: 'https://gamepedia.cursecdn.com/fallout_gamepedia/thumb/1/1a/Fo4_Power_Armor_T60.png/1200px-Fo4_Power_Armor_T60.png',
  wasitFavored: false}
]

const developer = {
  developers: 'Bethesda'
};

function GameTitle (){
  const titleList = fallout.map(game =>
    <li key={game.id}>
      <h1>{game.title}</h1>
      <img src={game.img} 
           alt={game.powerarmor}
      />
      <h1
        style={{
          color:game.wasitFavored ? 'yellow' : 'blue'
        }}
      >{game.powerarmor}</h1>

    </li>
  )
  return(
    <ul>{titleList}</ul>
  )
}

function DeveloperTitle (){
  return (
  <h1>{developer.developers}</h1>
  );
}

function VoteButton (){
  return(
  <button>Vote Here!</button>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Video Game Developer:<DeveloperTitle /></h1>
       <GameTitle />
       <h3>Click Below to Submit Your Vote for Fallout Being The Best Game Francise of the Year!</h3>
       <VoteButton />
      </header>
    </div>
  );
}

export default App;
