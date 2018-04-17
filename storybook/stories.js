function init(stories) {
    stories.push(require('@pro/apod/components/APOD/component.story.js'));
    stories.push(require('@pro/apod/components/Astronomy/component.story.js'));    
}

function loadStories() {
    const stories = [];
    init(stories);
    const names = [];
    const loads = {};
    stories.forEach(store => {
        names.push(store.name);
        if (loads[store.name]) {
            loads[store.name].push(store.load);
        } else {
            loads[store.name] = [store.load];
        }
    });
    names.sort((first, second) => Number(first.split('/')[1]) - Number(second.split('/')[1])).forEach(currentName => {
        const load = loads[currentName];
        if (load) {
            load.forEach(currentLoad => {
                currentLoad();
            });
        }
    });
}

export {
    loadStories
};
