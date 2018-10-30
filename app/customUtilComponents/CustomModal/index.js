/**
*
* CustomModal
*
*/

import React from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import RNModal from 'react-native-modal';

class CustomModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    toggleModal = () => {
        this.props.isCustomModalVisible = !this.props.isCustomModalVisible;
    }

    render() {
        return (
            <RNModal isVisible={this.props.isCustomModalVisible}>
                <View
                    style={{
                        backgroundColor: 'white',
                        padding: 10,
                        ...this.props.styles,
                    }}
                >
                    {
                        this.props.onCloseModal ?
                            <Button onPress={() => this.props.onCloseModal()} title="Close" color="#841584" />
                            : null
                    }
                    {this.props.content}
                </View>
            </RNModal>
        );
    }
}

CustomModal.propTypes = {
    content: PropTypes.object,
    isCustomModalVisible: PropTypes.bool,
    onCloseModal: PropTypes.func,
    styles: PropTypes.object,
};

export default CustomModal;
