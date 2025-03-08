import { TimeCapsule } from "../interfaces/TimeCapsule.jsx";

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

const createTimeCapsule = async(body: TimeCapsule) => {
    try {
        const response = await fetch(
            'api/timecapsule/', {
                method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify(body)
            }
        )
        const data = response.json();

        if(!response.ok){
            throw new Error('invalid API response, check network tab!');
        }
        return data;
    } catch(err) {
        console.log('Error from Time Capsule Creation:', err)
        return Promise.reject('Could not create Time Capsule.')
    }
}

export { createTimeCapsule, fetchCat }