
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
          const res = await fetch('http://localhost:3030/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "same-origin",
            body: JSON.stringify(data),
        })

        const resData = await res.json();
        console.log('res.ok -> ', res.ok)
        console.log('resData -> ', resData);
        if (res.ok) {
            return resData;
        }else {
            throw resData;
        }
    
    
}