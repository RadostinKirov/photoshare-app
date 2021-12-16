
export async function getAllPhotos() {
    console.log('get all photos enteres');
    try {
        let response = await fetch('https://photoshare-app-server.herokuapp.com/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
        let data = await response.json();
        console.log('data ->', data);
        return data;
    }
    catch (err) {
        throw err;
    }

}

export async function getPhogoById(id) {
    const response = await fetch(`https://photoshare-app-server.herokuapp.com/photo/details/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
    const data = response.json();
    return data;
}

export async function createPhoto(data) {

    try {
        const resData = await fetch('https://photoshare-app-server.herokuapp.com/photo/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data),
        });

        const result = await resData.json();

        if (resData.ok) {
            return result;
        } else {
            throw result;
        }
    } catch (err) {
        if (err.message == "Failed to fetch") {
            throw ("Server not responding");
        } else {
            const errMsg = err.message ? err.message : err;
            throw errMsg;
        }
    }
}

export async function editPhoto(data, id) {

    try {
        const resData = await fetch(`https://photoshare-app-server.herokuapp.com/photo/edit/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data),
        });

        const result = await resData.json();
        console.log('fetch result -> ', result)
        if (resData.ok) {
            console.log('OK', result)
            return result;
        } else {
            console.log('ERROR', result)
            throw result;
        }
    } catch (err) {
        if (err.message == "Failed to fetch") {
            throw ("Server not responding");
        } else {
            const errMsg = err.message ? err.message : err;
            throw errMsg;
        }
    }
}

export async function deletePhoto(id) {
    const resData = await fetch(`https://photoshare-app-server.herokuapp.com/photo/delete/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    });

    const result = resData.json();
    if (resData.ok) {
        console.log('OK', result)
        return result;
    } else {
        console.log('ERROR', result)
        throw result;
    }

}

export async function likePhoto(data) {
    const { photoId } = data;
    const resData = await fetch(`https://photoshare-app-server.herokuapp.com/photo/like/${photoId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
    });
    const result = await resData.json();
    console.log('resData -> ', resData)
    if (resData.ok) {
        console.log('OK', result)
        return result;
    } else {
        console.log('ERROR', result)
        throw result;
    }
}


