import React, {Component, PropTypes} from 'react';
class CardContainerHeader extends Component {

    backFunc = (e) => {
        if (e)
            e.preventDefault();
        this.props.backFunction(this.props.id);
    };

    render() {
        return (
          <h5>  {this.props.title}
                <i className="material-icons back" onClick={this.backFunc}>ic_arrow_back</i>
          </h5>
        );
    }
}
CardContainerHeader.propTypes = {
    title: PropTypes.string.isRequired,
    backFunction: PropTypes.func.isRequired
};
export default CardContainerHeader
