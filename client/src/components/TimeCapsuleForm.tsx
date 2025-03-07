import { useState } from 'react';

function TimeCapsuleForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [openDate, setOpenDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form submitted:', {name, email})

        //Send data to API
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
            </label>
            <br/>
            <label>
                Email:
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </label>
            <br/>
            <label>
                Open Date:
                <input type='text' value={openDate} onChange={(e)=>setOpenDate(e.target.value)}></input>
            </label>
            <br />
            <label>
                Message:
                <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)}></input>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default TimeCapsuleForm;