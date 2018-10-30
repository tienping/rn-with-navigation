
import { fromJS } from 'immutable';
import splashScreenReducer from '../reducer';

describe('splashScreenReducer', () => {
    it('returns the initial state', () => {
        expect(splashScreenReducer(undefined, {})).toEqual(fromJS({}));
    });
});
