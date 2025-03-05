
const fetchCat = async() => {
    const response = await fetch('api/cat/randomcat', {
        method: 'GET',
        headers:{
            'Content-Type': 'text/plain',
        },
    });
    const imageUrl = await response.text();
    return imageUrl;
}