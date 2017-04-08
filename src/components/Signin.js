import React, { Component } from 'react';
class Signin extends Component {
  render() {
    return (
      <form className="form-login">
        <div className="top-form">
          <span className="sigin-logo icn-logo"><i className="material-icons">code</i></span>
          <input className="textbox" type="text" placeholder="Usuario" />
          <input className="textbox" type="password" placeholder="Contraseña" />
        </div>
        <div className="bottom-form">

        </div>
        <button className="btn btn-primary"> INGESAR </button>
      </form>
    );
  }
}

export default Signin;
