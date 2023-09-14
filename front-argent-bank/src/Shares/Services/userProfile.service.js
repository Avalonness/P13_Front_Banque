const BASE_URL = 'http://localhost:3001';

export async function getProfile() {
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    if (!token) {
        throw new Error("No token found in localStorage");
    }

    const response = await fetch(`${BASE_URL}/api/v1/user/profile`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to fetch profile');
    }

    return await response.json();
}

export async function updateProfile(firstName, lastName) {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error("No token found in localStorage");
    }

    const body = {
        firstName,
        lastName
    };

    const response = await fetch(`${BASE_URL}/api/v1/user/profile`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to update profile');
    }

    return await response.json();
}