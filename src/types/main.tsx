import {MouseEventHandler} from "react";
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux'
import {RootState} from "../store/reducers";


export const SET_USER_DATA = '[MAIN APP] SET_USER_DATA';
export const SET_ACTIVE_PANEL = '[MAIN APP] SET_ACTIVE_PANEL';
export const SET_ACTIVE_VIEW = '[MAIN APP] SET_ACTIVE_VIEW';
export const SET_POPOUT = '[MAIN APP] SET_POPOUT';


export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export interface MainState {
    fetchedUser:  null | UserInfo
    activePanel: string
    activeView: string
    popout: JSX.Element | null
}

interface City {
    id: number
    title: string
}

interface Country {
    id: number
    title: string
}

interface UserInfo {
    id: number
    first_name: string
    last_name: string
    sex: number
    city: City
    country: Country
    bdate: string
    photo_100: string
    photo_200: string
    timezone: number
}

export interface setUserData {
    type: typeof SET_USER_DATA
    payload: UserInfo
}


export interface setActivePanel {
    type: typeof SET_ACTIVE_PANEL
    payload: string
}

export interface setActiveView {
    type: typeof SET_ACTIVE_VIEW
    payload: string
}

export interface setPopout {
    type: typeof SET_POPOUT
    payload: JSX.Element | null
}

export type propsHome = {id: string, go: MouseEventHandler, fetchedUser: UserInfo | null}


export type MainActionTypes =
    | setUserData
    | setActivePanel
    | setActiveView
    | setPopout
