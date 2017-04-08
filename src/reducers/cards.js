import * as CardsActionTypes from '../actiontypes/cards';
const URL_BASE = {
    production: '',
    development: 'http//localhost:1337'
};
const initialState = {
    cards: {
        all: [],
        showForm: false,
        listCardsIsLoading: true,
        listcardsHasError: false
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

                let obj = Object.assign({}, state.cards, {all: addCardList})
                obj.showForm = false;
                return {state, cards: obj};
            }
        case CardsActionTypes.REMOVE_CARD:
            {
                const removeCardList = [
                    ...state.cards.all.slice(0, action.playload),
                    ...state.cards.all.slice(action.playload + 1)
                ];
                let obj = Object.assign({}, state.cards, {all: removeCardList})
                obj.showForm = false;
                return {state, cards: obj};
            }
        case CardsActionTypes.SHOW_ADD_CARD:
            {
                let obj = Object.assign({}, state.cards, {showForm: true})
                return {state, cards: obj};
            }
        case CardsActionTypes.HIDE_ADD_CARD:
            {
                let obj = Object.assign({}, state.cards, {showForm: false})
                return {state, cards: obj};
            }
        case CardsActionTypes.LIST_ALL_CARDS:
            {
                //debugger
                let obj = Object.assign({}, state.cards, {
                    all: action.playload,
                    showForm: false
                })
                return {state, cards: obj}
            }
        case CardsActionTypes.LIST_ALL_CARDS_LOADING:
            {
                let obj = Object.assign({}, state.cards, {listCardsIsLoading: action.playload});
                return {state, cards: obj}
            }
        default:
            return state;
    }
}
