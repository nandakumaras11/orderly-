import { useState } from 'react';

export default function useApi(baseUrl = 'https://wheat-grasshopper-610881.hostingersite.com/foodie/public/api/admin') {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (url, method = 'GET', data = null, config = {}) => {
        setLoading(true);
        setError(null);
        try {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...(config.headers || {}),
                },
                ...config,
            };
            if (data) {
                options.body = JSON.stringify(data);
            }
            const response = await fetch(baseUrl + url, options);
            const result = await response.json();
            if (!response.ok) throw result;
            setLoading(false);
            return result;
        } catch (err) {
            setError(err);
            setLoading(false);
            throw err;
        }
    };

    return {
        loading,
        error,
        get: (url, config) => request(url, 'GET', null, config),
        post: (url, data, config) => request(url, 'POST', data, config),
        put: (url, data, config) => request(url, 'PUT', data, config),
        del: (url, config) => request(url, 'DELETE', null, config),
    };
}