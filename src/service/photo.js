
export async function getAllPhotos() {
    console.log('get all photos enteres')
    let response = await fetch('http://localhost:3030/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

   
    })
    let data = response.json();

    return data;

}


export function createPhoto(data) {
    fetch('http://localhost:3030/photo/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

