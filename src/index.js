import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import firebase from 'firebase'

import './css/index.css';
import './css/base.css';
import './css/signin.css';
import './css/cards.css';
import './css/header.css';

// Routes
import Routes from './routes';
import Card from './reducers/cards';
import User from './reducers/user';

//import Cards from './containers/cards';
const rootReducer = combineReducers({Card, User});

const store = createStore(rootReducer, applyMiddleware(thunk));
//console.log(store.getState())
firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
});
render(
    <Routes store={store}/>, document.getElementById('app'));
//render(routes, document.getElementById('app'));
