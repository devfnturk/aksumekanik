const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const request = async (
    url,
    method,
    data,
    token,
    cookies
) => {
    const headers = {};

    if (token) headers["Authorization"] = `Bearer ${token}`;
    if (cookies) headers["Cookie"] = cookies;

    const config = {
        method,
        headers,
    };

    if (method !== "GET" && data) {
        // Eğer data FormData ise Content-Type set etmiyoruz
        if (data instanceof FormData) {
            config.body = data;
        } else {
            headers["Content-Type"] = "application/json";
            config.body = JSON.stringify(data);
        }
    }

    const response = await fetch(`${BASE_URL}${url}`, config);

    if (!response.ok) {
        let message = `HTTP error! status: ${response.status}`;
        try {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const json = await response.json();
                if (json?.message) message = json.message;
                else if (json?.error) message = json.error;
            } else {
                const errorText = await response.text();
                if (errorText) message = errorText;
            }
        } catch (_) {
            // yut
        }
        throw new Error(message);
    }

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
        return await response.json();
    } else {
        return true;
    }
};


export const get = (url, token, cookies) =>
    request(url, "GET", undefined, token, cookies);

export const post = (url, data, token, cookies) =>
    request(url, "POST", data, token, cookies);

export const put = (url, data, token, cookies) =>
    request(url, "PUT", data, token, cookies);

export const del = (url, token) =>
    request(url, "DELETE", undefined, token);
