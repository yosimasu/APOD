import produce from 'immer';

export default (state = {}, action) => produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
        case 'update':
            const data = {...payload.data} // clone
            draftState.data = data;
    }
});
