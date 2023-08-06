import {Thunk, TypedAction} from "../store/types";

const SPINNER_SET_STATUS = "SPINNER/SPINNER_SET_STATUS";
const POPUP_PUSH = "POPUP/PUSH";
const POPUP_DELETE = "POPUP/DELETE"
export type PopupActions = TypedAction<typeof SPINNER_SET_STATUS, number>
    | TypedAction<typeof POPUP_PUSH, PopupElement>
    | TypedAction<typeof POPUP_DELETE, string>

export interface PopupElement {
    id?: string | undefined;
    data: string[];
    actionVisible?: boolean;
    cancelVisible?: boolean;
    actionTitle?: string;
    cancelTitle?: string;
    actionHandler?: Function | null;
    cancelHandler?: Function | null;
    finishHandler?: Function | null;
    clearHandler?: Function | null;
    descriptionCode?: string;
    technicalSupport?: boolean;
    flag?: boolean;
    comment?: boolean;
}

export interface IPopupState {
    spinnerStatus: number;
    popups: Array<PopupElement>;
}

export const initialState: IPopupState = {
    spinnerStatus: 0,
    popups: []
}

export function spinnerPlusStatus(): Thunk {
    return async dispatch => {
        dispatch({
            type: SPINNER_SET_STATUS,
            payload: 1,
        });
    };
}

export function spinnerMinusStatus(): Thunk {
    return async dispatch => {
        dispatch({
            type: SPINNER_SET_STATUS,
            payload: -1,
        });
    };
}

export function popupPush(popup: PopupElement): Thunk {
    if (popup.id === undefined)
        popup.id = Date.now().toString();

    return async (dispatch, getState) => {
        const state = getState();

        if(state.popup.popups.find(p => p.descriptionCode === popup.descriptionCode) === undefined) {
            dispatch({
                type: POPUP_PUSH,
                payload: popup,
            });
        }
    };
}

export function popupDelete(id: string): Thunk {
    return async dispatch => {
        dispatch({
            type: POPUP_DELETE,
            payload: id,
        });
    };
}

export function popupReducer(
    state: IPopupState = initialState,
    action: PopupActions
): IPopupState {
    switch (action.type) {
        case SPINNER_SET_STATUS: {
            const newStatus = state.spinnerStatus + action.payload;
            return {...state, spinnerStatus: newStatus >= 0 ? newStatus : 0};
        }
        case POPUP_PUSH:
            return {...state, popups: [...state.popups, action.payload]};
        case POPUP_DELETE:
            return {
                ...state,
                popups: [
                    ...state.popups.filter(popupElem => popupElem.id !== action.payload)
                ]
            };
        default:
            return state;
    }
}
