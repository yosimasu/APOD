import produce from 'immer';

export default (state, { payload }) => produce(state, (draftState) => {
    const { date } = payload;
    if (!draftState.data[date]) {
        draftState.data[date] = {
            data: null,
            error: false,
            loading: false,
        };
    }
    draftState.data[date].loading = true;
});
