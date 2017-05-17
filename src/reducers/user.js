import * as UserActionTypes from '../actiontypes/user';
const initialState = {
    user: null
}

export default function User(state = initialState, action) {
    switch (action.type) {
        case UserActionTypes.USER_SIGNIN_SUCCESS:
            console.log(action.playload)
            let obj = Object.assign({}, state.user, action.playload);
            return {state, user: obj}
        case UserActionTypes.USER_LOGOUT:
            //let obj = Object.assign({}, state.user, action.playload);
            return {state, user: null}
        case UserActionTypes.GET_BACKEND_DATA:
            //debugger
            console.log(action.playload)
            return state
        default:
            return state;
    }
}
