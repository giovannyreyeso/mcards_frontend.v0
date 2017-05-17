import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router'
import * as CardActionCreators from '../actions/cards';
import Card from '../components/cards/Card';
import CardForm from '../components/cards/CardForm';
import InitialState from '../components/cards/InitialState'
import LoadingState from '../components/cards/LoadingState'
import CardContainerHeader from '../components/cards/CardContainerHeader'
import CardDetails from '../components/cards/CardDetails'

class Cards extends Component {
    static propTypes = {
        cards: PropTypes.object.isRequired
    };
    componentWillMount() {
        //console.log(this.props);
        if (this.props.user == null)
            browserHistory.push('/signin')
    }
    componentDidMount() {
        this.props.loadData('/api/card');
    }

    render() {
        const {dispatch, cards} = this.props;

        let listCard;
        let cardForm,
            cardContainerHeader,
            cardDetails;
        if (cards.showListCards) {
            let cardsComponents,
                initialState,
                loadingState;
            cardsComponents = cards.all.map((card, index) => (<Card _id={card._id} index={index} name={card.name} key={index} aviable={card.aviable} nextCutDay= {card.nextCutDay} cutDay={card.cutDay} removeCard={this.props.removeCard} openCardDetails={this.props.openCardDetails}/>));
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
            cardForm = <CardForm saveData={this.props.saveData}/>
            cardContainerHeader = <CardContainerHeader backFunction={this.props.showListCards} title="Back to my cards"/>
        } else if (cards.showCardDetails) {
            cardContainerHeader = <CardContainerHeader backFunction={this.props.showListCards} title="Back to my cards"/>
            cardDetails = <CardDetails id={cards.selectedCard}/>
        }
        return (
            <div className="col-sm-12 col-md-5 offset-md-3 col-lg-8 offset-lg-2">
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
    saveData: PropTypes.func.isRequired,
    cards: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
    return {cards: state.Card.cards, user: state.User.user};
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadData: (url) => dispatch(CardActionCreators.loadData(url)),
        showAddCard: () => dispatch(CardActionCreators.showAddCard()),
        addCard: (card) => dispatch(CardActionCreators.addCard(card)),
        saveData: (card, data) => dispatch(CardActionCreators.saveData(card, data)),
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
