import {
    connect,
} from 'react-redux';

import { fetchData } from 'app/actions';

import Component from './component';

const mapStateToProps = (state) => ({
    data: state.data,
    loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
    reload() {
        dispatch(fetchData());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
