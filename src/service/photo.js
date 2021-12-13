
export async function getAllPhotos() {
    console.log('get all photos enteres');
    try {
        let response = await fetch('http://localhost:3030/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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
    const response = await fetch(`http://localhost:3030/photo/details/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = response.json();
    return data;
}

export async function createPhoto(data) {

    try {
        const resData = await fetch('http://localhost:3030/photo/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
    const resData = await fetch(`http://localhost:3030/photo/edit/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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

export async function deletePhoto(id) {
    const resData = await fetch(`http://localHost:3030/photo/delete/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
    const resData = await fetch(`http://localHost:3030/photo/like/${photoId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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


