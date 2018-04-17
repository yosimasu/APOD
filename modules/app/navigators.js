import features from './features';

const navigators = features.reduce((previous, current) => {
    if (current.navigator) {
        return {
            ...previous,
            ...current.navigator,
        }
    }
    return previous;
}, {});

export default navigators;
