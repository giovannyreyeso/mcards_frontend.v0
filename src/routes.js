import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
//components here
import NotFound from './components/NotFound'
import App from './components/App';
import About from './components/About'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard';
import Cards from './containers/cards'
import Stats from './components/stats/Stats'

const routes = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/" component={Dashboard}/>
                <Route path="/about" component={About}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/cards" component={Cards}/>
                <Route path="/stats" component={Stats}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>
);
routes.propTypes = {
    store: PropTypes.object.isRequired
};
/*
const routes = (
    <Router>
        <Route component={App}>
            <Route path="/" component={Dashboard}/>
            <Route path="/about" component={About}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/stats" component={Stats}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);
*/
export default routes;
