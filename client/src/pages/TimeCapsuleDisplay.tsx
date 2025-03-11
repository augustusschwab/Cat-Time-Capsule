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
        <div className="section">
            <div className="container">
                <div className="columns is-centered">
                <div className="column is-half">
                    <div className="card">
                    <div className="card-content">
                        <h1 className="title">Hi {timeCapsule?.name}, this is your time capsule!! 🎉</h1>

                        <div className="content">
                        <p><strong>This is what your friend wanted to tell you:</strong></p>
                        <p className="message is-size-5 has-text-weight-light">{timeCapsule?.message}</p>

                        <p className="mt-4"><strong>Here is a link to a cat photo too! 🐱</strong></p>
                        <button 
                            className="button is-primary is-fullwidth mt-3"
                            onClick={() => window.open(timeCapsule?.catUrl, '_blank')}
                        >
                            See Your Cat
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default DisplayTimeCapsule;