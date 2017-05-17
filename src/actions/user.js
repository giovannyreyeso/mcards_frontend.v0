import * as UserActionTypes from '../actiontypes/user'
import axios from 'axios'
/*
export const USER_LOGOUT = 'user/USER_LOGOUT'
export const USER_SIGNIN = 'user/USER_SIGNIN'
export const GET_CURRENT_USER = 'user/GET_CURRENT_USER'
export const USER_SIGNIN_SUCCESS = 'user/USER_SIGNIN_SUCCESS'
export const USER_SIGNIN_FAIL = 'user/USER_SIGNIN_FAIL'

*/
/*export const signIn = playload => {
    return {type: UserActionTypes.USER_SIGNIN, playload: playload}
}*/
export const getCurrentUser = playload => {
    return {
        type: UserActionTypes.GET_CURRENT_USER,
        playload: playload
    }
}
export const userSignInSuccess = (user) => {
    return {
        type: UserActionTypes.USER_SIGNIN_SUCCESS,
        playload: user
    }
}
export const userSignInFail = () => {
    return {
        type: UserActionTypes.USER_SIGNIN_FAIL,
        playload: true
    }
}
export const userLogout = () => {
    return {
        type: UserActionTypes.USER_LOGOUT,
        playload: true
    }
}
export const me = (playload) => {
    return {
        type: UserActionTypes.GET_BACKEND_DATA,
        playload: playload
    }
}
export function getBackendData(url) {
    return function(dispatch) {
        //dispatch(listCardsIsLoading(true));
        axios.get(url).then(response => {

            if (response.status != 200) {
                throw Error(response.statusText);
            }
            // d/ispatch(listCardsIsLoading(false));
            dispatch(me(response.data))
        })
    }
}
