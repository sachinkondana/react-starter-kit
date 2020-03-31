const API_URL = process.env.REACT_APP_API_URL;

const ApiServices = {
    get(url) {
        const requestOptions = {
            method: 'GET',
        };

        return this.fetch(url, requestOptions);
    },
    post(url, body) {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(body),
        };

        return this.fetch(url, requestOptions);
    },
    put(url, body) {
        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(body),
        };

        return this.fetch(url, requestOptions);
    },
    delete(url, body) {
        const requestOptions = {
            method: 'DELETE',
            body: JSON.stringify(body),
        };

        return this.fetch(url, requestOptions);
    },
    save(url, body) {
        const hasId = Object.prototype.hasOwnProperty.call(body, 'id');

        if (hasId) {
            this.put(url, body);
        } else {
            this.post(url, body);
        }
    },
    fetch(url, requestOptions) {
        return fetch(API_URL + url, requestOptions).then((r) => this.handleResponse(r));
    },
    parse(text) {
        try {
            return JSON.parse(text);
        } catch (err) {
            return null;
        }
    },
    handleResponse(response) {
        return response.text().then((text) => {
            const data = text && this.parse(text);
            if (data === null || !response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    },
};

export default ApiServices;
