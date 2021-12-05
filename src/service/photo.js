
export async function getAllPhotos() {
    console.log('get all photos enteres')
    let response = await fetch('http://localhost:3030/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let data = await response.json();
    console.log(data)
    return data;

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
    const resData = await fetch('http://localhost:3030/photo/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = resData.json();
    if (result.status == 'ok') {

    } else {
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
    console.log('resData -> ',resData)
    if (resData.ok) {
        console.log('OK', result)
        return result;
    } else {
        console.log ('ERROR' ,result)
        throw result;
    }
}


