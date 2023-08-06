import {combineReducers} from "redux";
import {createBrowserHistory} from "history";
import {IPopupState, popupReducer} from "../ducks/popup";

export const UPDATE_CLEAR = "UPDATE_CLEAR";

export interface State {
    popup: IPopupState,
}

export const history = createBrowserHistory();

export const rootReducers = combineReducers<State>({
    popup: popupReducer,
});