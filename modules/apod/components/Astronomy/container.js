import {
    connect,
} from 'react-redux';

import Component from './component';

const mapStateToProps = (state) => ({
    ...state.apod,
});

const mapDispatchToProps = (dispatch) => ({
    reload() {
        dispatch({ type: 'apod/fetchData' });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
