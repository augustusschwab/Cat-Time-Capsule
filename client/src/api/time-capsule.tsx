import { TimeCapsuleData } from "../interfaces/TimeCapsuleData.js";
import { EmailData } from "../interfaces/EmailData.js";
import { ApiMessage } from "../interfaces/ApiMessage.js";

//Gets a URL to a cat image from the server.
const fetchCat = async() => {
    const response = await fetch('/api/cat/random-cat-image', {
        method: 'GET',
        headers:{
            'Accept': 'text/plain',
        },
    });
    const imageUrl = await response.text();
    return imageUrl;
}

//Sends email notification
const sendEmail = async(body: EmailData) => {
  try{
    const response = await fetch('/api/email/send-email', {
      method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = response.json();

    if(!response.ok){
      throw new Error('invalid API response, check network tab!');
    }
    return data;
    } catch(err) {
        console.log('Error from email notification:', err)
        return Promise.reject('Could not send notification.')
    }
  
}

//Retrieves all time capsules for a user from the server database.
const retrieveTimeCapsules = async () => {
    try {
        const response = await fetch('/api/time-capsule/', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if(!response.ok) {
        throw new Error('Invalid Time Capsule API response, check network tab!');
        }

        return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        return [];
    }  
};

//Retrieves a time capsule from the server database from the time capsule id.
const retrieveTimeCapsule = async (id: number | null): Promise<TimeCapsuleData> => {
    try {
        const response = await fetch(`/api/time-capsule/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        if(!response.ok) {
        throw new Error('Invalid Time Capsule API response, check network tab!');
        }
        return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        return Promise.reject('Could not fetch time capsule');
    }
};


//Post call to the server to create a new Time Capsule object in the database.
const createTimeCapsule = async(body: TimeCapsuleData ):Promise<TimeCapsuleData> => {
    try {
        const response = await fetch(
            '/api/time-capsule/', {
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

//Put call to the server to update a Time Capsule object in the database.
const updateTimeCapsule = async (id: number, body: TimeCapsuleData ):Promise<TimeCapsuleData> => {
    try {
      const response = await fetch(
        `/api/time-capsule/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        }
      )
      const data = await response.json();
  
      if(!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.error('Update did not work', err);
      return Promise.reject('Update did not work');
    }
  };

  //Delete call to the server to delete a Time Capsule object in the database.
  const deleteTimeCapsule = async (id: number | null): Promise<ApiMessage> => {
    try {
      const response = await fetch(
        `/api/time-capsule/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json();
  
      if(!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.error('Error in deleting time capsule', err);
      return Promise.reject('Could not delete time capsule');
    }
  };

export { fetchCat, sendEmail, retrieveTimeCapsules, retrieveTimeCapsule, createTimeCapsule, updateTimeCapsule, deleteTimeCapsule }