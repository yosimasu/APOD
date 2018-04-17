import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

const Reload = ({ reload }) => {
    if (reload) {
        return (<Button title="重載" onPress={reload} />);
    }
    return null;
};

class Astronomy extends React.Component {
    render() {
        const {
            data,
            error,
            loading,
            reload,
        } = this.props;

        if (error) {
            return (
                <View>
                    <Text style={styles.title}>ERROR</Text>
                    <Reload reload={reload} />
                </View>
            );
        }

        if (loading) {
            return (<ActivityIndicator />);
        }

        if (data) {
            const { title, url, explanation, date } = data;
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            style={{width: '80%', height: 200, resizeMode: 'cover'}}
                            source={{uri: url}}
                        />
                    </View>
                    <Text style={styles.explanation}>{explanation}</Text>
                    <Text style={styles.date}>{date}</Text>
                    <Reload reload={reload} />
                </View>
            );
        }

        return (
            <View>
                <Text style={styles.title}>NO DATA</Text>
                <Reload reload={reload} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    title: {
        marginTop: 15,
        fontSize: 16,
        alignSelf: 'center',
    },
    explanation: {
        marginTop: 15,
        fontSize: 12,
        alignSelf: 'center',
    },
    date: {
        marginTop: 15,
        fontSize: 9,
        alignSelf: 'center',
    }
});

export default Astronomy;
