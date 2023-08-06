import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {State} from "../../store/rootReducers";
import {popupPush} from "../../ducks/popup";
import {Card, ICardDispatchProps, ICardStateProps} from "./Card";

const mapStateToProps: MapStateToProps<ICardStateProps, {}, State> = state => {

    return {
    }
};

const dispatchProps: MapDispatchToProps<ICardDispatchProps, {}> = {
    popupPush,
};

export const CardConnected = connect(
    mapStateToProps,
    dispatchProps,
)(Card);