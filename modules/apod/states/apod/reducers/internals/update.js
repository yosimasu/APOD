import produce from 'immer';

export default (state, { payload }) => produce(state, (draftState) => {
    const { date, error, data } = payload;
    draftState.data[date] = {
        error, data
    };
});
