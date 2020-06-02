import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddlewar from 'redux-thunk';
import {Provider} from 'react-redux'
import{createLogger} from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {searchRobots, requestRobotsReducer} from './redocers'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// Makes an Object from the reducers.
const rootReducer = combineReducers({searchRobots, requestRobotsReducer})

// logger console logs all the actions redux makes.
const logger = createLogger()

// Reduxs store, replaces the state object.
const store = createStore(rootReducer, applyMiddleware(thunkMiddlewar, logger))

// The provieder injects the store to the App, it can be accessed with <connect></connect>.
ReactDOM.render(<Provider store={store} ><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
