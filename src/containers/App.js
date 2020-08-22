import React, { Component } from 'react';
import MainPage from '../components/MainPage';
import {setSearchField, requestRobotsAction} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobotsReducer.robots,
    isPending: state.requestRobotsReducer.isPending,
    failed: state.requestRobotsReducer.failed,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: ()=>dispatch(requestRobotsAction())

  }
}



class App extends Component {
  render() {
    return <MainPage {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);