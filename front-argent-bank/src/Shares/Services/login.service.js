const BASE_URL = 'http://localhost:3001'; 

async function login(email, password) {
    const response = await fetch(`${BASE_URL}/api/v1/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Failed to login');
    }

    localStorage.setItem('token', data.body.token);

    return data; 
}

export default login;