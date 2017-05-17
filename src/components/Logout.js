import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
import * as UserActionTypes from '../actions/user';
import firebase from 'firebase'

class Logout extends Component {
  componentDidMount(){
    this.props.userLogout();
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha cerrado session`))
    .catch(error => console.log(`Error ${error.code} : ${error.message}`));
    setTimeout(function () {
      browserHistory.push('/signin')
    }, 1000);
  }
  render() {
    return (
        <div>
          <h1>Thanks, Goodbye</h1>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {user: state.User.user};
};
const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(UserActionTypes.userLogout())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
