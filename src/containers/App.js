import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchTerms: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (e) => {
    this.setState({ searchTerms: e.target.value })
  }

  renderFilteredRobots = () => {
    const {robots, searchTerms} = this.state;
    return robots.filter(robot => robot.name.toLowerCase().includes(searchTerms.toLowerCase()));
  }

  render() {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={this.renderFilteredRobots()}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
