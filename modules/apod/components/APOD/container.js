import moment from 'moment';

import { get } from 'lodash';

import {
    connect,
} from 'react-redux';

import { NavigationActions } from 'react-navigation';

import Component from './component';

const mapStateToProps = (state, props) => {
    const dateOfProps = get(props, 'date', moment().format('YYYY-MM-DD'));
    const date = get(props, ['navigation', 'state', 'params', 'date'], dateOfProps);
    const data = get(state, ['apod', 'data', date], {
        data: null,
        error: false,
        loading: false,
    });

    return {
        date,
        ...data
    }; 
};

const mapDispatchToProps = (dispatch) => ({
    reload(date) {
        let queryDate = moment().format('YYYY-MM-DD');
        if (date) {
            queryDate = date;
        }
        dispatch({ type: 'apod/fetchData', payload: { date: queryDate } });
    },
    prev(date) {
        dispatch(NavigationActions.navigate({ routeName: 'APOD', params: { date } }));
    },
    next(date) {
        dispatch(NavigationActions.navigate({ routeName: 'APOD', params: { date } }));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
