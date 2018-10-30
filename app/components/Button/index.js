/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text } from 'native-base';
import styled from 'styled-components';


const MyCustomContainer = styled(Container)`
    background: red;
`

class Button extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <MyCustomContainer>
                <Content>
                    <Text>Hello</Text>
                </Content>
            </MyCustomContainer>
        );
    }
}

Button.propTypes = {

};

export default Button;
