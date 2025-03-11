import { useState, useEffect } from "react";
import { TimeCapsuleData } from "../interfaces/TimeCapsuleData.js"
import { retrieveTimeCapsule } from "../api/time-capsule.js";
import { useParams } from 'react-router-dom';

const DisplayTimeCapsule = () => {
    const { id } = useParams();

    const [timeCapsule, setTimeCapsule] = useState<TimeCapsuleData | undefined>();

    const fetchTimeCapsule = async (timeCapsuleId: number) => {
        try {
            const data = await retrieveTimeCapsule(timeCapsuleId);
            setTimeCapsule(data);
        } catch(err) {
            console.error('Failed to retrieve time capsule.', err);
        }
    };

    useEffect(() => {
        fetchTimeCapsule(Number(id));
    }, []);

    return(
        <div className='time-capsule'>
            <h1>Hi {timeCapsule?.name} this is your time capsule!!</h1>
            <div className='time-capsule-list'>
                <p>This is what your friend wanted to tell you:</p>
                <p>{timeCapsule?.message}</p>
                <p>Here is a link to a cat photo too!</p>
                <button onClick={() => window.open(timeCapsule?.catUrl, '_blank')}>See Your Cat</button>
            </div>
        </div>
    )

}

export default DisplayTimeCapsule;