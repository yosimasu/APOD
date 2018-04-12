import {
    connect,
} from 'react-redux';

import Component from './component';

const mapStateToProps = (state) => ({
    data: state.data,
    loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
    reload() {
        dispatch({ type: 'fetchData' });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
