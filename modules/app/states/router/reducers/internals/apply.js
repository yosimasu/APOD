import { reducer } from '@pro/app/components/Router';

export default function apply(state, { payload: action }) {
    return reducer(state, action)
};
