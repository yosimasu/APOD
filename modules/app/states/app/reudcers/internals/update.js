import produce from 'immer';

export default (state, { payload }) => produce(state, (draftState) => {
    const data = {...payload.data} // clone
    draftState.data = data;
});
