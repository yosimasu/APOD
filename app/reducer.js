import produce from 'immer';

export default (state = { loading: false }, action) => produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
        case 'fetchDataStart':
            draftState.loading = true;
            break;

        case 'fetchDataEnd':
            draftState.loading = false;
            break;

        case 'update':
            const data = {...payload.data} // clone
            draftState.data = data;
            break;
    }
});
