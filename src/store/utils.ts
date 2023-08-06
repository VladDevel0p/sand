import {Dispatch} from "redux";
import {State} from "./rootReducers";

interface storeUtils {
    dispatch: any;
    getState: () => State;
}

const apiUtils: storeUtils = {
    dispatch: () => null as any,
    getState: () => ({} as State)
};

export function initStoreUtils(dispatch: Dispatch, getState: () => State) {
    apiUtils.dispatch = dispatch;
    apiUtils.getState = getState;
}

export function getStoreUtils() {
    return apiUtils;
}
