import * as CardsActionTypes from '../actiontypes/cards';
const initialState = {
    cards: {
        all: [],
        selectedCard: -1,
        showForm: false,
        listCardsIsLoading: true,
        showListCards: true,
        listcardsHasError: false,
        showCardDetails: false
    }
}

export default function Card(state = initialState, action) {
    switch (action.type) {
        case CardsActionTypes.ADD_CARD:
            {

                const addCardList = [
                    ...state.cards.all,
                    action.playload
                ]
                let obj = Object.assign({}, state.cards, {
                    all: addCardList
                })
                obj.showListCards = true;
                obj.showForm = false;
                obj.showCardDetails = false;
                return {
                    state,
                    cards: obj
                };
            }
        case CardsActionTypes.REMOVE_CARD:
            {
                const removeCardList = [
                    ...state.cards.all.slice(0, action.playload),
                    ...state.cards.all.slice(action.playload + 1)
                ];
                let obj = Object.assign({}, state.cards, {
                    all: removeCardList
                })
                obj.showForm = false;
                return {
                    state,
                    cards: obj
                };
            }
        case CardsActionTypes.SHOW_FORM_ADD_CARD:
            {
                let obj = Object.assign({}, state.cards, {
                    showForm: true,
                    showListCards: false,
                    showCardDetails: false
                })
                return {
                    state,
                    cards: obj
                };
            }
        case CardsActionTypes.SHOW_LIST_CARDS:
            {
                let obj = Object.assign({}, state.cards, {
                    showListCards: true,
                    showForm: false,
                    showCardDetails: false
                })
                return {
                    state,
                    cards: obj
                };
            }
        case CardsActionTypes.LIST_ALL_CARDS:
            {
                //debugger
                let obj = Object.assign({}, state.cards, {
                    all: action.playload,
                    showForm: false
                })
                return {
                    state,
                    cards: obj
                }
            }
        case CardsActionTypes.LIST_ALL_CARDS_LOADING:
            {
                let obj = Object.assign({}, state.cards, {
                    listCardsIsLoading: action.playload
                });
                return {
                    state,
                    cards: obj
                }
            }
        case CardsActionTypes.OPEN_CARD_DETAILS:
            {
                let obj = Object.assign({}, state.cards, {
                    showCardDetails: true,
                    showListCards: false,
                    selectedCard: action.playload
                })

                return {
                    state,
                    cards: obj
                };
            }
        default:
            return state;
    }
}
