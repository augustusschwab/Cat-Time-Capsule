import { ChangeEvent, FormEvent, useState } from 'react';
import { TimeCapsule } from '../interfaces/TimeCapsule.jsx';


function TimeCapsuleForm() {
    const [timeCapsule, setTimeCapsule] = useState<TimeCapsule | undefined>({
        name: '',
        email: '',
        openDate: '',
        message: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setTimeCapsule((prev)=>prev ? {...prev, [name]: value} : undefined);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form submitted:', {timeCapsule})
        //navigate('/')
        //Send data to API
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' value={timeCapsule?.name} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Email:
                <input type='text' value={timeCapsule?.email} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Open Date:
                <input type='text' value={timeCapsule?.openDate} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                Message:
                <input type='text' value={timeCapsule?.message} onChange={handleChange}></input>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TimeCapsuleForm;