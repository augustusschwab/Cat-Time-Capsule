import { EmailData } from '../interfaces/EmailData.js';
import { MouseEventHandler } from "react";
import { useNavigate, Link } from 'react-router-dom';

export default function TimeCapsuleCard(props: any){
    const timeCapsule = props.timeCapsule;
    const timeCapsuleUrl = `http://localhost:3000/time-capsule/${props.timeCapsule.id}`;
    
    const email: EmailData = {
        to: timeCapsule.email,
        subject: 'You Have Recieved A Time Capsule from a Friend.',
        text: `Click the link to open the time capsule. ${timeCapsuleUrl}`,
        html: `Click the link to open the time capsule. ${timeCapsuleUrl}`
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/time-capsule-edit');
    }

    const handleNotification: MouseEventHandler<HTMLButtonElement> = async() => {
        try{
            const data = await props.sendNotification(email);
            return data
        } catch(err) {
            console.error('Failed to send notification:', err);
        }
    }

    const handleDelete: MouseEventHandler<HTMLButtonElement> = async() => {
        const capsuleId = timeCapsule.id;
        if(!isNaN(capsuleId)){
            try{
                const data = await props.deleteTimeCapsule(capsuleId);
                return data;
            } catch(err) {
                console.error('Failed to delete time capsule.')
            }
        }
    };


    return (
        <>
        <Link to='/time-capsule-edit' state={timeCapsule.id}>
            <div className='time-capsule-card'>
                <div className='card-item'>{timeCapsule.name}</div>
                <div className='card-item'>{timeCapsule.email}</div>
                <div className='card-item'>{timeCapsule.openDate}</div>
                <button onClick={handleNotification}>Send Notification</button>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleClick}>Edit</button>
            </div>
        </Link>
        </>
    )
};