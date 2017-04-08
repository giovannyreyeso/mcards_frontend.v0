import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import './css/index.css';
import './css/base.css';
import './css/signin.css';
import './css/cards.css';

// Routes
import Routes from './routes';
import CardsReducer from './reducers/cards';
//import Cards from './containers/cards';
const store = createStore(CardsReducer, applyMiddleware(thunk));
render(
    <Routes store={store}/>, document.getElementById('app'));
//render(routes, document.getElementById('app'));
