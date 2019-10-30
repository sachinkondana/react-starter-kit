const Utils = {
    omit: function (obj, key) {
        const { [key]: omitted, ...rest } = obj;
        return rest;
    },
    debounce: function (func, delay) {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        }
    },
};

export default Utils;