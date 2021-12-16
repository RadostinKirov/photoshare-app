
export async function createUser(data) {

    try {
        const res = await fetch('https://photoshare-app-server.herokuapp.com/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data),
        });

        const resData = await res.json();
        console.log('res -> ', res.ok)
        if (res.ok) {
            return resData;
        } else {
            throw resData;
        }
    } catch (err) {
        console.log('catched err -> ', await err);
        if (err.message == "Failed to fetch") {
            throw ("Server not responding");
        } else {
            const errMsg = err.message ? err.message : err;
            throw errMsg;
        }
    }
}

export async function getUser(data) {


    try {
        const res = await fetch('https://photoshare-app-server.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            credentials: "same-origin",
            body: JSON.stringify(data),
        })

        const resData = await res.json();
        console.log('res.ok -> ', res.ok)
        console.log('resData -> ', resData);
        if (res.ok) {
            return resData;
        } else {
            throw resData;
        }
    } catch (err) {
        console.log('catched err -> ', err);
        if (err.message == "Failed to fetch") {
            throw ("Server not responding");
        } else {
            const errMsg = err.message ? err.message : err;
            throw errMsg;
        }
    }

}

export async function getUserById(id) {

    const res = await fetch('https://photoshare-app-server.herokuapp.com/auth/getUserById', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: "same-origin",
        body: JSON.stringify({ id })
    });

    const resData = await res.json();
    if (res.ok) {
        return resData;
    } else {
        throw resData;

    }
}

export async function getRanklist() {
    console.log('ranklist entered')
    try {
           const res = await fetch('https://photoshare-app-server.herokuapp.com/auth/ranklist' , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                credentials: "same-origin",
               
            });

        const resData = await res.json();
        console.log('all users -> ', resData);
        if (res.ok) {
            return resData;
        } else {
            throw resData;
        }
    }
    catch (err) {
        throw err;
    }

}

export async function logout() {
    console.log('logout entered');
    const res = await fetch('https://photoshare-app-server.herokuapp.com/auth/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: "same-origin"
    });

    console.log('logoute res -> ', res);
}