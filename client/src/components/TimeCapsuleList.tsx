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
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered">Your Time Capsules</h1>

                <div className="table-container">
                <table className="table is-fullwidth is-striped is-hoverable">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Open Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {timeCapsules ? (
                        timeCapsules.map((timeCapsule) => (
                        <TimeCapsuleCard
                            key={timeCapsule.id}
                            id={timeCapsule.id}
                            timeCapsule={timeCapsule}
                            sendNotification={sendNotification}
                            deleteTimeCapsule={deleteCapsule}
                        />
                        ))
                    ) : (
                        <tr>
                        <td colSpan={4} className="has-text-centered">
                            Could not retrieve time capsules!
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}

export default TimeCapsuleList;


