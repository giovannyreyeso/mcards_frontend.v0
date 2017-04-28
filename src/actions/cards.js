import * as CardsActionTypes from '../actiontypes/cards';

export const addCard = playload => {
    return {type: CardsActionTypes.ADD_CARD, playload};
};
export const showAddCard = () => {
    return {type: CardsActionTypes.SHOW_FORM_ADD_CARD, playload: true}
}
export const showListCards = () => {
    return {type: CardsActionTypes.SHOW_LIST_CARDS, playload: true}
}
export const removeCard = (index) => {
    return {type: CardsActionTypes.REMOVE_CARD, playload: index}
}

export const listCards = (items) => {
    return {type: CardsActionTypes.LIST_ALL_CARDS, playload: items}
}

export const listCardsIsLoading = (bool) => {
    return {type: CardsActionTypes.LIST_ALL_CARDS_LOADING, playload: bool}
}

export const listcardsHasError = (bool) => {
    return {type: CardsActionTypes.LIST_ALL_CARDS_ERROR, playload: bool}
}
export const openCardDetails = (id) => {
    return {type: CardsActionTypes.OPEN_CARD_DETAILS, playload: id}
}
export function loadData(url) {
    return (dispatch) => {
        dispatch(listCardsIsLoading(true));

        fetch(url).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(listCardsIsLoading(false));

            return response;
        }).then((response) => response.json()).then((items) => dispatch(listCards(items))).catch(() => dispatch(listcardsHasError(true)));
    };
}
