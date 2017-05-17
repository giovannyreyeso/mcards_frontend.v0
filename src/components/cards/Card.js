import React, {Component, PropTypes} from 'react';
class Card extends Component {

    openCardDetails = (e) => {
        if (e)
            e.preventDefault();

        this.props.openCardDetails(this.props._id);
    };
    render() {
        return (
            <li className="collection-item avatar animated bounceIn" onClick={this.openCardDetails}>
                <div className="title">
                    {this.props.name}
                    <p className="card-due">
                        $ {this.props.aviable.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
                    </p>
                </div>
                <div className="cut-date">
                    { moment(parseInt(this.props.nextCutDay)).format('ll')}
                </div>
            </li>
        );
    }
}
Card.propTypes = {
    _id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    aviable: PropTypes.number.isRequired,
    cutDay: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    removeCard: PropTypes.func.isRequired,
    openCardDetails: PropTypes.func.isRequired
};
export default Card
