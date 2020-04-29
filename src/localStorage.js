const {localStorage} =  window;

export const loadState = () => {
    const serializedState = localStorage.getItem("store");
    try {
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch {
        return undefined
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("store", serializedState);
    } catch {
        throw new Error("Could not save state");
    }
};