import './App.css';
import React, { Component } from "react";
import { CardList } from './components/card-list.component/card-list';
import { SearchBar } from './components/search-bar.component/search-bar';

class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters : users } ))
  }

  takeInput = e => {
    this.setState({
      searchField: e.target.value
    })
  }
  render () {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1 style = {{fontFamily: 'Bigelow Rules', color: '#0ccac4', fontSize: '72px' }} > Monsters Rolodex </h1>
        <SearchBar
          placeholder="Search Here" 
          handleChange={this.takeInput}
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
