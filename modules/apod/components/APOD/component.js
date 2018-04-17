import React from 'react';
import moment from 'moment';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

import Astronomy from '../Astronomy';

class APOD extends React.Component {
    componentDidMount() {
        this.props.reload(this.queryDate().format('YYYY-MM-DD'));
    }

    queryDate = () => {
        let queryDate = moment();
        const { date, reload } = this.props;
        if (date) {
            queryDate = moment(date, 'YYYY-MM-DD');
        }
        return queryDate;
    };

    render() {
        const { data, loading, error, reload, prev, next } = this.props;  
        const prevDate = this.queryDate().subtract(1, 'days');      
        const currentDate = this.queryDate();
        const nextDate = this.queryDate().add(1, 'days');  
        return (
            <View style={styles.container}>
                <View style={styles.queryContainer}>
                    <Button
                        title="PREV"
                        onPress={() => this.props.prev(prevDate.format('YYYY-MM-DD'))}
                    />
                    <Text>{currentDate.format('YYYY-MM-DD')}</Text>
                    <Button
                        title="NEXT"
                        onPress={() => this.props.next(nextDate.format('YYYY-MM-DD'))}
                    />
                </View>
                <ScrollView>
                    <Astronomy
                        data={data}
                        loading={loading}
                        error={error}
                        reload={() => reload(currentDate.format('YYYY-MM-DD'))}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    queryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default APOD;
