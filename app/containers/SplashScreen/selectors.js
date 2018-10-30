import { createSelector } from 'reselect';

/**
 * Direct selector to the splashScreen state domain
 */
const selectSplashScreenDomain = (state) => state.get('splashScreen');

const getData = function getData(object, properties) {
    if (!properties || properties.length === 0) {
        return object;
    }

    const data = object.get(properties[0]);
    const newArr = properties.slice(1);

    return (newArr.length > 0 && data && data.get) ? getData(data, newArr) : data;
};

const makeSelectData = (layers) => createSelector(
    selectSplashScreenDomain,
    (substate) => getData(substate, layers).toJS()
);

const makeSelectSplashScreen = () => createSelector(
    selectSplashScreenDomain,
    (substate) => substate.toJS()
);

export default makeSelectSplashScreen;
export {
    selectSplashScreenDomain,
    makeSelectData,
};
