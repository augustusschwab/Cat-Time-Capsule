import { useState, useEffect } from 'react';
import TimeCapsuleCard from './TimeCapsuleCard.js'
import { TimeCapsuleData } from '../interfaces/TimeCapsuleData.js'
import { retrieveTimeCapsules, sendEmail, deleteTimeCapsule } from '../api/time-capsule.js';
import { EmailData } from '../interfaces/EmailData.js';
import { ApiMessage } from '../interfaces/ApiMessage.js';

function TimeCapsuleList() {
    const [timeCapsules, setTimeCapsules] = useState<TimeCapsuleData[]>();

    const fetchAllTimeCapsules = async() => {
        try{
            const data = await retrieveTimeCapsules();
            setTimeCapsules(data);
        } catch(err) {
            console.error('Failed to retrieve time capsules.', err);
        }
    }

    const sendNotification = async(email: EmailData) => {
        try {
            const data: any = await sendEmail(email);
            return data;
        } catch(err) {
            return Promise.reject(err)
        }
    }

    const deleteCapsule = async(timeCapsuleId: number): Promise<ApiMessage> => {
        try {
            const data = await deleteTimeCapsule(timeCapsuleId);
            fetchAllTimeCapsules();
            return data;
        } catch(err) {
            return Promise.reject(err);
        }
    }

    useEffect(() => {
        fetchAllTimeCapsules();
    }, []);

    return(
        <div className='list-container'>
            <div className='list'>
                <div className='list-header'>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Open Date</div>
                </div>
                <div className='time-capsule-list'>
                    {timeCapsules ? timeCapsules.map((timeCapsule) => (
                        <TimeCapsuleCard
                            key={timeCapsule.id}
                            id={timeCapsule.id}
                            timeCapsule={timeCapsule}
                            sendNotification={sendNotification}
                            deleteTimeCapsule={deleteCapsule}
                        />
                        )
                    ) : (
                        <div> Could not retrieve time capsules! </div>

                    )
                    }
                </div>
            </div>
        </div>
    )

}

export default TimeCapsuleList;