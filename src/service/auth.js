
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

export async function getUserById(id){
    console.log('getUserEntered');
    console.log('ID received -> ', id);
    const res = await fetch('http://localhost:3030/auth/getUserById', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "same-origin",
        body: JSON.stringify({id})
    });
    
    const resData = await res.json();
    console.log('resData -> ', resData)
    if (res.ok) {
        return resData;
    }else {
        console.log(resData.message);
    }
}

export async function logout(){
    console.log('logout entered');
    const res = await fetch('http://localhost:3030/auth/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "same-origin"
        });

        console.log('logoute res -> ', res);
}