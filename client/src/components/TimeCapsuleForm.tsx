import { ChangeEvent, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimeCapsule } from '../interfaces/TimeCapsule.jsx';
import { fetchCat, createTimeCapsule } from '../api/time-capsule.js'


function TimeCapsuleForm() {
    const [newTimeCapsule, setTimeCapsule] = useState<TimeCapsule | undefined>({
        name: '',
        email: '',
        openDate: '',
        message: '',
        catUrl:'',
    });

    const navigate = useNavigate();

    const createNewTimeCapsule = async (body: TimeCapsule) => {
        try {
            const catUrl = await fetchCat();
            setTimeCapsule((prev)=> prev ? { ...prev, catUrl: catUrl } : undefined);
            console.log(body);
            const data = await createTimeCapsule(body);
            return data;
        } catch(err) {
            console.log('Failed to create Time Capsule', err);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setTimeCapsule((prev)=> prev ? { ...prev, [name]: value } : undefined);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Form submitted:', {newTimeCapsule})
        if(newTimeCapsule){
            const data = createNewTimeCapsule(newTimeCapsule);
            console.log(data)
            navigate('/home');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' name='name' value={newTimeCapsule?.name || ''} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Email:
                <input type='text' name='email' value={newTimeCapsule?.email || ''} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Open Date:
                <input type='text' name='openDate' value={newTimeCapsule?.openDate || ''} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                Message:
                <input type='text' name='message' value={newTimeCapsule?.message || ''} onChange={handleChange}></input>
            </label>
            <br />
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
    );
}

export default TimeCapsuleForm;