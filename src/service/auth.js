
export function createUser(data) {
    fetch('http://localhost:3030/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            localStorage
                .setItem('username', data._id)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export async function getUser(data) {
    try {
        const res = await fetch('http://localhost:3030/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const resData = await res.json();
        return resData;
    }
    catch (error) {
        console.error('Error:', error);
        return error;
    };
}