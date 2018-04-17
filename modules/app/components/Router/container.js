import {
    connect,
} from 'react-redux';

import Component from './component';

const mapStateToProps = (state) => ({
    router: state.router,
});

export default connect(mapStateToProps)(Component);
