/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [
        sagaMiddleware,
    ];

    // const enhancers = [
    //     applyMiddleware(...middlewares),
    //     devTools({
    //         name: `Hermo ${Platform.OS}`,
    //         hostname: 'localhost',
    //         port: 5678,
    //     }),
    // ];

    const store = createStore(
        createReducer(),
        fromJS(initialState),
        // compose(...enhancers)
        composeWithDevTools(applyMiddleware(...middlewares)),
    );

    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    return store;
}

