import React, {Component} from 'react';
class InitialState extends Component {
    render() {
        return (
            <li className='initial-state'>
                <div className="empty-state-title">
                  No cuentas con ninguna tarjeta
                </div>
                <div className="empty-stile-icon">
                  <i className="material-icons">ic_content_copy</i>
                </div>
            </li>
        );
    }
}

export default InitialState;
