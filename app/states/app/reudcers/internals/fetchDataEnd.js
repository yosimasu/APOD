import produce from 'immer';

export default (state, { payload }) => produce(state, (draftState) => {
    draftState.loading = false;
});
