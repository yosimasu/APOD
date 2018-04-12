import React from 'react';
import { View, Text } from 'react-native';

class Astronomy extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <View>
                <Text>{JSON.stringify(data, null, 2)}</Text>
            </View>
        );
    }
}

export default Astronomy;
