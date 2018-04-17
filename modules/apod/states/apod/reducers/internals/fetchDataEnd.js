import produce from 'immer';

export default (state, { payload }) => produce(state, (draftState) => {
    const { date } = payload;
    draftState.data[date].loading = false;
});
