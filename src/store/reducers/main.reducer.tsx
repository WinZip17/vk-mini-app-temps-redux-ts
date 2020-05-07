import {MainState, SET_ACTIVE_PANEL, SET_ACTIVE_VIEW, SET_POPOUT, SET_USER_DATA, MainActionTypes} from "../../types/main";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import React from "react";

const initialState: MainState = {
    fetchedUser: null,
    activePanel: 'home',
    activeView: 'homeView',
    popout: <ScreenSpinner />
};


const mainReducer = function (state = initialState, action: MainActionTypes) {
    switch ( action.type )
    {
        case SET_USER_DATA:
            return {
                ...state,
                fetchedUser: action.payload
            };
        case SET_ACTIVE_PANEL:
            return {
                ...state,
                activePanel: action.payload
            };
        case SET_ACTIVE_VIEW:
            return {
                ...state,
                activeView: action.payload
            };
        case SET_POPOUT:
            return {
                ...state,
                popout: action.payload
            };
        default:
            return state;
    }
};

export default mainReducer;
