import { EmailData } from '../interfaces/EmailData.js';
import { MouseEventHandler } from "react";
import { Link} from 'react-router-dom';
import { FaBell, FaTrash, FaEdit } from 'react-icons/fa';

export default function TimeCapsuleCard(props: any){
    const timeCapsule = props.timeCapsule;
    const timeCapsuleUrl = `http://localhost:3000/time-capsule/${props.timeCapsule.id}`;
    
    const email: EmailData = {
        to: timeCapsule.email,
        subject: 'You Have Recieved A Time Capsule from a Friend.',
        text: `Click the link to open the time capsule. ${timeCapsuleUrl}`,
        html: `Click the link to open the time capsule. ${timeCapsuleUrl}`
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
        <tr>
            <td>{timeCapsule.name}</td>
            <td>{timeCapsule.email}</td>
            <td>{timeCapsule.openDate}</td>
            <td className="buttons">
            {/* Send Notification Button */}
            <button onClick={handleNotification} className='button is-link is-small'>
              <span className='icon'>
                <FaBell />
              </span>
              {/* <span>Send Notification</span> */}
            </button>
    
            {/* Delete Button */}
            <button onClick={handleDelete} className='button is-danger is-small'>
              <span className='icon'>
                <FaTrash />
              </span>
              {/* <span>Delete</span> */}
            </button>
    
            {/* Edit Button */}
            <Link to='/time-capsule-edit' state={timeCapsule.id}>
                <button  className='button is-info is-small'>
                <span className='icon'>
                    <FaEdit />
                </span>
                {/* <span>Edit</span> */}
                </button>
            </Link>
            </td>
      </tr>
    )
};




