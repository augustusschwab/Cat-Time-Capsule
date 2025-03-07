import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimeCapsule } from '../interfaces/TimeCapsule.jsx';


function TimeCapsuleForm() {
    const [timeCapsule, setTimeCapsule] = useState<TimeCapsule | undefined>({
        name: '',
        email: '',
        openDate: '',
        message: '',
    });

    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setTimeCapsule((prev)=> prev ? { ...prev, [name]: value } : undefined);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form submitted:', {timeCapsule})
        navigate('/home');
        //Send data to API
    };

    return(
        <form onSubmit={handleSubmit}>
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
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
    );
}

export default TimeCapsuleForm;