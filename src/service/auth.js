
export async function createUser(data){
    const res = await fetch('http://localhost:3030/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const resData = await res.json();
    return resData;
}


export async function getUser(data) {
    try {
        const res = await fetch('http://localhost:3030/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "same-origin",
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