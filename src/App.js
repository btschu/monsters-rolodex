import { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: '342sr3'
        },
        {
          name: "Frank",
          id: 'oi3990'
        },
        {
          name: "Jacky",
          id: '938ji'
        },
        {
          name: "Andre",
          id: '98u3jj'
        },
      ],
    };
  }

  render() {
    return <div className="App">
      {
        this.state.monsters.map((monster) => {
          return (
          <div key={monster.id}>
            <h1 >{monster.name}</h1>
          </div>
          )
        })
      }
    </div>;
  }
}

export default App;
