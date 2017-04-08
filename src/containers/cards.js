import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PlayerActionCreators from '../actions/cards';

import Card from '../components/cards/Card';
import CardForm from '../components/cards/CardForm';
import InitialState from '../components/cards/InitialState'
import LoadingState from '../components/cards/LoadingState'

class Cards extends Component {
    static propTypes = {
        cards: PropTypes.object.isRequired
    };
    componentDidMount() {
        this.props.loadData('http://58e8063743e10712000e6381.mockapi.io/mcards/cards');
    }
    render() {
        const {dispatch, cards} = this.props;
        //const mapStateToProps = state => ({cards: state.cards});
        let cardForm,
            cardsComponents,
            cardAddButton,
            initialState,
            loadingState;
        if (cards.showForm) {
            cardForm = <CardForm addCard={this.props.addCard}/>
            cardAddButton = (
                <h5>
                    <i className="material-icons back" onClick={this.props.hideAddCard}>ic_arrow_back</i>
                    My Cards
                </h5>
            )
        } else {
            cardsComponents = cards.all.map((card, index) => (<Card index={index} nombre={card.nombre} key={index} disponible={card.disponible} corte={card.corte} removeCard={this.props.removeCard}/>));
            cardAddButton = (
                <h5>My Cards
                    <i className="material-icons" onClick={this.props.showAddCard}>add</i>
                </h5>
            )
            if (cardsComponents.length <= 0 && !cards.listCardsIsLoading) {
                initialState = <InitialState/>
            }
            if (cardsComponents.length <= 0 && cards.listCardsIsLoading) {
                loadingState = <LoadingState/>
            }
        }
        return (
            <div className="col s12 m6 push-m3">
                <div className="card-accion">
                    {cardAddButton}
                </div>
                <ul className="collection cards">
                    {cardsComponents}
                    {initialState}
                    {loadingState}
                </ul>
                {cardForm}
            </div>
        );
    }
}
Cards.propTypes = {
    loadData: PropTypes.func.isRequired,
    cards: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
    return {cards: state.cards};
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (url) => dispatch(PlayerActionCreators.loadData(url)),
        showAddCard: () => dispatch(PlayerActionCreators.showAddCard()),
        addCard: (card) => dispatch(PlayerActionCreators.addCard(card)),
        hideAddCard: () => dispatch(PlayerActionCreators.hideAddCard()),
        removeCard: (index) => dispatch(PlayerActionCreators.removeCard(index))
    };
};
//const mapStateToProps = state => ({cards: state.cards});
/*const addCard = bindActionCreators(PlayerActionCreators.addCard, dispatch);
  const showAddCard = bindActionCreators(PlayerActionCreators.showAddCard, dispatch);
const hideAddCard = bindActionCreators(PlayerActionCreators.hideAddCard, dispatch);
const removeCard = bindActionCreators(PlayerActionCreators.removeCard, dispatch);
*/
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
