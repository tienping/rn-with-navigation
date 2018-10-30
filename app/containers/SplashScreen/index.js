/**
 *
 * SplashScreen
 *
 */

import React from 'react';
import { Container, Content, Text } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { goToLanding } from '../../AppScreenConfig';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSplashScreen from './selectors';
import reducer from './reducer';
import saga from './saga';

export class SplashScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    componentDidMount = () => {
        goToLanding();
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>Splash</Text>
                </Content>
            </Container>
        );
    }
}

SplashScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
    splashscreen: makeSelectSplashScreen(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'splashScreen', reducer });
const withSaga = injectSaga({ key: 'splashScreen', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(SplashScreen);
