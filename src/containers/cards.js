import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CardActionCreators from '../actions/cards';

import Card from '../components/cards/Card';
import CardForm from '../components/cards/CardForm';
import InitialState from '../components/cards/InitialState'
import LoadingState from '../components/cards/LoadingState'
import CardContainerHeader from '../components/cards/CardContainerHeader'

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
        let listCard;
        let cardForm,
            cardContainerHeader,
            cardDetails;
        if (cards.showListCards) {
            let cardsComponents,
                initialState,
                loadingState;
            cardsComponents = cards.all.map((card, index) => (<Card id={card.id} index={index} nombre={card.nombre} key={index} disponible={card.disponible} corte={card.corte} removeCard={this.props.removeCard} openCardDetails={this.props.openCardDetails}/>));
            cardContainerHeader = (
                <h5>My Cards
                    <i className="material-icons add" onClick={this.props.showAddCard}>add</i>
                </h5>
            )
            if (cardsComponents.length <= 0 && !cards.listCardsIsLoading) {
                initialState = <InitialState/>
            }
            if (cardsComponents.length <= 0 && cards.listCardsIsLoading) {
                loadingState = <LoadingState/>
            }
            listCard = (
                <ul className="collection cards">
                    {cardsComponents}
                    {initialState}
                    {loadingState}
                </ul>
            )
        }
        if (cards.showForm) {
            cardForm = <CardForm addCard={this.props.addCard}/>
            cardContainerHeader = <CardContainerHeader backFunction={this.props.showListCards} title="Back to my cards"/>
        } else if (cards.showCardDetails) {
            cardContainerHeader = <CardContainerHeader backFunction={this.props.showListCards} title="Back to my cards"/>
            cardDetails = (
                <h5>Detalles...</h5>
            )
        }
        return (
            <div className="col s12 m6 push-m3">
                <div className="card-accion">
                    {cardContainerHeader}
                </div>
                <div className="list-card">
                    {listCard}
                </div>
                <div className="card-form">
                    {cardForm}
                </div>
                <div className="card-details">
                    {cardDetails}
                </div>
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
        loadData: (url) => dispatch(CardActionCreators.loadData(url)),
        showAddCard: () => dispatch(CardActionCreators.showAddCard()),
        addCard: (card) => dispatch(CardActionCreators.addCard(card)),
        showListCards: () => dispatch(CardActionCreators.showListCards()),
        removeCard: (index) => dispatch(CardActionCreators.removeCard(index)),
        openCardDetails: (id) => dispatch(CardActionCreators.openCardDetails(id))
    };
};
//const mapStateToProps = state => ({cards: state.cards});
/*const addCard = bindActionCreators(CardActionCreators.addCard, dispatch);
  const showAddCard = bindActionCreators(CardActionCreators.showAddCard, dispatch);
const hideAddCard = bindActionCreators(CardActionCreators.hideAddCard, dispatch);
const removeCard = bindActionCreators(CardActionCreators.removeCard, dispatch);
*/
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
