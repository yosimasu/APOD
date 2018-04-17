import {
    connect,
} from 'react-redux';

import Component from './component';

const mapStateToProps = (state) => ({
    data: state.app.data,
    loading: state.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
    reload() {
        dispatch({ type: 'app/fetchData' });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
