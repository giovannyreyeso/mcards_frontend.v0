import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActionTypes from '../actions/cards';

import Header from './Header';

class App extends Component {
    render() {
        const {dispatch, user} = this.props;
        let header;

        if (user != null)
            header = <Header/>
        return (
            <div>
                {header}
                <div className="container cards">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {user: state.User.user};
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentUser: () => dispatch(UserActionTypes.getCurrentUser())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
