import {
    connect,
} from 'react-redux';

import { NavigationActions } from 'react-navigation';

import Component from './component';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    onPress() {
        dispatch(
            NavigationActions.reset(NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'APOD' })],
          }))
        );
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
