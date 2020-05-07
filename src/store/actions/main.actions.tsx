import bridge from "@vkontakte/vk-bridge";
import {SET_ACTIVE_PANEL, SET_ACTIVE_VIEW, SET_POPOUT, SET_USER_DATA} from "../../types/main";
import { ThunkAction } from "redux-thunk";
import {RootState} from "../reducers";
import { Action } from "redux";


export const setUserData = (): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    try {
        const user = await bridge.send('VKWebAppGetUserInfo');
        dispatch({
            type      : SET_USER_DATA,
            payload: user
        })
        dispatch(setPopout(null))
    } catch (err) {
        console.log(err)
    }
}

export const setActivePanel = (panel: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    return dispatch({
        type      : SET_ACTIVE_PANEL,
        payload: panel
    })
}

export const setActiveView = (view: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    return dispatch({
        type      : SET_ACTIVE_VIEW,
        payload: view
    })
}

export const setPopout = (popout: JSX.Element | null): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    return dispatch({
        type      : SET_POPOUT,
        payload: popout
    })
}

