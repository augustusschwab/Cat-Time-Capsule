import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateTimeCapsule, retrieveTimeCapsule } from '../api/time-capsule.js';
import { TimeCapsuleData } from '../interfaces/TimeCapsuleData.js';

const EditTimeCapsule = () => {
    const[timeCapsule, setTimeCapsule] = useState<TimeCapsuleData | undefined>();

    const navigate = useNavigate();
    const { state } = useLocation();

    const fetchTimeCapsule = async(timeCapsuleId: number) => {
        try {
            const data = await retrieveTimeCapsule(timeCapsuleId)
            setTimeCapsule(data);
        } catch(err) {
            console.error('Failed to retrieve time capsule:', err);
        }

    }

    useEffect(() => {
        console.log(state);
        fetchTimeCapsule(state);
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(timeCapsule && timeCapsule.id !== null){
            updateTimeCapsule(timeCapsule.id, timeCapsule);
            navigate('/');
        } else {
            console.error('Time capsule is undefined.')
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTimeCapsule((prev) => (prev ? { ...prev, [name]: value } : undefined))
    };

    return (
        <>
        <h1>Edit Time Capsule</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' name='name' value={timeCapsule?.name || ''} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Email:
                <input type='text' name='email' value={timeCapsule?.email || ''} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Open Date:
                <input type='text' name='openDate' value={timeCapsule?.openDate || ''} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                Message:
                <input type='text' name='message' value={timeCapsule?.message || ''} onChange={handleChange}></input>
            </label>
            <br />
            <button className="btn" type="submit">Submit</button>
        </form>
        </>
    )
};

export default EditTimeCapsule;