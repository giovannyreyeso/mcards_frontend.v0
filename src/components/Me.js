import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'

class Me extends Component {
  componentDidMount() {
      //console.log(this.props);
      if (this.props.user == null)
          browserHistory.push('/signin')
  }
  render() {
    return (
      <div>
        <h1>Me</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {user: state.User.user};
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Me);
