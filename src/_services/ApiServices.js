const API_URL = process.env.REACT_APP_API_URL;

const ApiServices = {
    get: function (url) {
        const requestOptions = {
            method: 'GET',
        };

        return this.fetch(url, requestOptions);
    },
    post: function (url, body) {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(body),
        };

        return this.fetch(url, requestOptions);
    },
    put: function (url, body) {
        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(body),
        };

        return this.fetch(url, requestOptions);
    },
    delete: function (url, body) {
        const requestOptions = {
            method: 'DELETE',
            body: JSON.stringify(body),
        };

        return this.fetch(url, requestOptions);
    },
    save: function (url, body) {
        if (body.hasOwnProperty('id')) {
            this.put(url, body);
        } else {
            this.post(url, body);
        }
    },
    fetch: function (url, requestOptions) {
        return fetch(API_URL + url, requestOptions).then(this.handleResponse);
    },
    handleResponse: function (response) {
        return response.text().then((text) => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    },
}

export default ApiServices;