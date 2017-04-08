import React, {PropTypes} from 'react';

const Card = props => (
    <li className="collection-item avatar animated bounceIn">
        <span className="title">
          {props.nombre}
          <i className="material-icons" onClick={() => props.removeCard(props.index)}>ic_remove</i>
        </span>
        <p className="card-due">
            <i className="material-icons">attach_money</i>
            {props.disponible}
        </p>
        <p className="cut-date">
            <i className="material-icons">date_range</i>
            {props.corte}
        </p>
    </li>
);
Card.propTypes = {
    nombre: PropTypes.string.isRequired,
    disponible: PropTypes.number.isRequired,
    corte: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    removeCard: PropTypes.func.isRequired
};
//
export default Card;
/*
class Card extends Component {
    render() {
        return (
            <li className="collection-item avatar animated bounceIn">
                <span className="title">Banamex</span>
                <p className="card-due">
                    <i className="material-icons">attach_money</i>
                    3,500
                </p>
                <p className="cut-date">
                    <i className="material-icons">date_range</i>
                    6 Abril
                </p>
            </li>
        );
    }
}

export default Card;
*/
