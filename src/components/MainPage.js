import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary'
import './MainPage.css';


class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }
  

  componentDidMount() {
    this.props.onRequestRobots()
  }

    filteredRobots = robots =>{
        return robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
            })
    }
    // He changed it to ↓, but I think the old fun is better for reuseability.
    // filteredRobots = () =>{
    //     return this.state.robots.filter(robot =>{
    //         return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    //         })
    // }

  render() {
    // const { robots} = this.state;
    const {onSearchChange, robots, isPending} = this.props
    
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filteredRobots(robots)} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default MainPage;