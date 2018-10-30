/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

const initialState = fromJS({});
function appReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default function createReducer(injectedReducers) {
    return combineReducers({
        global: appReducer,
        ...injectedReducers,
    });
}
