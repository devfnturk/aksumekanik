const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetcher = async (endpoint, options = {}) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Bir hata oluştu.');
    }

    return res.json();
};