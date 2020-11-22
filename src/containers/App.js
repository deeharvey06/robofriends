import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../action';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.requestRobots();
  }

  renderFilteredRobots = () => {
    const { searchTerms, robots } = this.props

    return robots.filter(robot => robot.name.toLowerCase().includes(searchTerms.toLowerCase()));
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ?
        <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.renderFilteredRobots()}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  searchTerms: state.searchReducer.searchTerms,
  robots: state.robotReducer.robots,
  isPending: state.robotReducer.isPending,
  error: state.robotReducer.error,
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobot: () => dispatch(requestRobots()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
