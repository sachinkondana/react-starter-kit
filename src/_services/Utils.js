const Utils = {
    omit(obj, key) {
        const { [key]: omitted, ...rest } = obj;
        return rest;
    },
    debounce(func, delay) {
        let debounceTimer;
        return (...rest) => {
            const context = this;
            const args = rest;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    },
};

export default Utils;
