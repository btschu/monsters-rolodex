import { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-bar/search-box.component'
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    // logging to see order that functions are ran
    console.log('constructor');
  }

  // make API request and turn it into .json
  componentDidMount() {
    // logging to see order that functions are ran
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users };
      },
        () => {
          console.log(this.state);
        }
      )
      )
  }

  // search bar event handler
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    });
  };

  render() {
    // console.log to see order that functions are ran
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return <div className="App">
      {/* search bar functionality */}
      <SearchBox
        className="search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList
        monsters={filteredMonsters}
      />
    </div>;
  };
};

export default App;
