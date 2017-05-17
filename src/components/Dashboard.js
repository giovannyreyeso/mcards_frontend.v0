import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
import * as UserActionTypes from '../actions/user'

class Dashboard extends Component {
    componentDidMount() {
        //console.log(this.props);
        if (this.props.user == null) {
            browserHistory.push('/signin')
        }else{
          this.props.getBackendData('/api/me')
        }
    }
    render() {
        return (
            <div className="welcome-container animated fadeInUp">
                <h1>Bienvenido</h1>
                <p>Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem Lorem lorem lorem lorem
                </p>
            </div>
        );
    }
}
Dashboard.propTypes = {
    getBackendData: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
    return {user: state.User.user};
};
const mapDispatchToProps = (dispatch) => {
    return {
        getBackendData: (url) => dispatch(UserActionTypes.getBackendData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
