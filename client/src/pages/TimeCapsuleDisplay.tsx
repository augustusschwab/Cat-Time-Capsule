// import { useState, useEffect } from "react";
// import { TimeCapsuleData } from "../interfaces/TimeCapsuleData.js"
// import { retrieveTimeCapsule, retrieveTimeCapsules } from "../api/time-capsule.js";
// import { Link } from "react-router-dom";
// import { ApiMessage } from "../interfaces/ApiMessage.js"

// const timeCapsuleDisplayPage = () => {
//     const [timeCapsules, setTimeCapsules] = useState<TimeCapsuleData[]>();

//     const fetchAllTimeCapsules = async() => {
//         try{
//             const data = await retrieveTimeCapsules();
//             setTimeCapsules(data);
//         } catch(err) {
//             console.error('Failed to retrieve time capsules.', err);
//         }
//     }
//     const fetchTimeCapsule = async (timeCapsuleId: number) => {
//         try {
//             const data = await retrieveTimeCapsule(timeCapsuleId);
//             return data;
//         } catch(err) {
//             console.error('Failed to retrieve time capsule.', err);
//         }
//     };

//     useEffect(() => {
//         fetchAllTimeCapsules();
//     }, []);

//     return(
//         <div className='time-capsule'>
//             <div className='new-time-capsule'>
//                 <Link to='/new-time-capsule'>Click to add a new time capsule!</Link>
//             </div>
//             <div className='time-capsule-list'>
//                 {timeCapsules ? timeCapsules.map((timeCapsule) => (
//                     <TimeCapsuleCard
//                         key={timeCapsule.id}
//                         timeCapsule={timeCapsule}
//                         editTimeCapsule = {editTimeCapsule}
//                         deleteTimeCapsule={deleteTimeCapsule}
//                     />
//                     )
//                 ) : (
//                     <div> Could not retrieve time capsules! </div>

//                 )
//                 }
//             </div>
//         </div>
//     )

// }