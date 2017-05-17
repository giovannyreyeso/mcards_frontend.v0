import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import * as UserActionTypes from '../actions/user'
import firebase from 'firebase'
import axios from 'axios'

class Signin extends Component {
    handleAuthGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => console.log(`${result.user.email} ha iniciado session`)).catch(error => console.log(`Error ${error.code} : ${error.message}`));
    };
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.userSignInSuccess(user)
                axios.defaults.headers.common['Authorization'] = "Bearer " + user.ia.Ba;
                browserHistory.push('/')
                //axios.defaults.baseURL = 'http://localhost:1337/api/';
                //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            } else {
                this.props.userSignInFail()
            }
        });

    };
    componentWillMount() {};
    render() {
        const {dispatch, user} = this.props;
        return (
            <div className="row">
                <div className="col s12 m6 offset-m3 l12">
                    <form className="form-login">
                        <div className="top-form">
                            <span className="sigin-logo icn-logo">
                                <i className="material-icons">
                                    code</i>
                            </span>
                            <h4>Welcome to MCards
                            </h4>
                            <h6>Choose your side to continue..
                            </h6>
                        </div>
                        <div className="col s12 m4 l6">
                            <input type="button" className="btn btn-primary blue" value="LOGIN WITH FACEBOOK"/>
                        </div>
                        <div className="col s12 m4 l6">
                            <input type="button" className="btn btn-primary red" value="LOGIN WITH GOOGLE" onClick={this.handleAuthGoogle}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
Signin.propTypes = {
    userSignInSuccess: PropTypes.func.isRequired,
    userSignInFail: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
    return {user: state.User.user};
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentUser: () => dispatch(UserActionTypes.getCurrentUser()),
        userSignInSuccess: (user) => dispatch(UserActionTypes.userSignInSuccess(user)),
        userSignInFail: (error) => dispatch(UserActionTypes.userSignInFail(error))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
