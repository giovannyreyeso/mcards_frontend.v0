import React, {Component, PropTypes} from 'react';
export default class CardDetails extends Component {
    render() {
        return (
            <div>
            <p>Detalles de la tarjeta {this.props.id}</p>
            </div>
        );
    }
}
CardDetails.propTypes = {
    id: PropTypes.number.isRequired
};
