import React from 'react';
import { View, Text, Image, Button } from 'react-native';

class Astronomy extends React.Component {
    render() {
        const { data, reload } = this.props;
        const { title, url, explanation, date } = data;
        return (
            <View>
                <Text>{title}</Text>
                <Image
                    style={{width: '80%', height: 200, resizeMode: 'cover'}}
                    source={{uri: url}}
                />
                <Text>{explanation}</Text>
                <Text>{date}</Text>
                <Button title="重載" onPress={reload} />
            </View>
        );
    }
}

export default Astronomy;
