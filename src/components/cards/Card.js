import React, {Component, PropTypes} from 'react';
class Card extends Component {

    openCardDetails = (e) => {
        if (e)
            e.preventDefault();

        this.props.openCardDetails(this.props.id);
    };

    render() {
        return (
            <li className="collection-item avatar animated bounceIn" onClick={this.openCardDetails}>
                <div className="title">
                    {this.props.nombre}
                    <p className="card-due">
                        $ {this.props.disponible.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
                    </p>
                </div>
                <div className="cut-date">
                    {this.props.corte}
                </div>
            </li>
        );
    }
}
Card.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    disponible: PropTypes.number.isRequired,
    corte: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    removeCard: PropTypes.func.isRequired,
    openCardDetails: PropTypes.func.isRequired
};
export default Card
