/**
*
* IconText
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { dataChecking } from 'utils/appUtils';
import { vw } from 'style/const';

class IconText extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        const { data } = this.props;
        const textAlign = data.title && data.title.alignment ? 'center' : data.title.alignment;

        return (
            dataChecking(data, 'title', 'text') ?
                <View style={{ padding: 2 * vw, paddingTop: 3 * vw }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: 'bold',
                                textAlign,
                            }}
                        >
                            {data.title.text}
                        </Text>
                    </View>
                </View>
                :
                null
        );
    }
}

IconText.propTypes = {
    data: PropTypes.object.isRequired,
};

export default IconText;
