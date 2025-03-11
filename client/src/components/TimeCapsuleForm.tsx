import { ChangeEvent, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimeCapsuleData } from '../interfaces/TimeCapsuleData.js';
import { fetchCat, createTimeCapsule } from '../api/time-capsule.js'
import '../index.css'

function TimeCapsuleForm() {
    const [newTimeCapsule, setTimeCapsule] = useState<TimeCapsuleData>({
        id: null,
        name: '',
        email: '',
        openDate: '',
        message: '',
        catUrl: '',
        assignedUserId: null,
        assignedUser: null,
    });

    const navigate = useNavigate();

    const createNewTimeCapsule = async (body: TimeCapsuleData) => {
        try {
            console.log(body);
            const data = await createTimeCapsule(body);
            return data;
        } catch(err) {
            console.log('Failed to create Time Capsule', err);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setTimeCapsule((prev)=> ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        //Fetch cat url
        const catUrl = await fetchCat();
        console.log('This is the catURL:', catUrl);
        
        //Update the Time Capsule object with the image of a random cat.
        const updatedTimeCapsule = {...newTimeCapsule, catUrl};
        console.log('Form submitted:', updatedTimeCapsule)

        //Create a new time capsule object with the information provided by the user and the random cat image url.
        await createNewTimeCapsule(updatedTimeCapsule);
        navigate('/home'); //navigate to the user home page
    };

    return(
        <form className="capsule-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input className="input-box" type='text' name='name' value={newTimeCapsule?.name || ''} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Email:
                <input className="input-box" type='text' name='email' value={newTimeCapsule?.email || ''} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Open Date:
                <input className="input-box" type='text' name='openDate' value={newTimeCapsule?.openDate || ''} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                Message:
                <textarea className="message-box" type='text' name='message' value={newTimeCapsule?.message || ''} onChange={handleChange}></textarea>
            </label>
            <br />
            <button className="btn" type="submit">Submit</button>
        </form>
    );
}

export default TimeCapsuleForm;