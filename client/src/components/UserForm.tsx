import React from "react";


// interface UserData {
//     id: number;
//     username: string;
//     email: string;
// }

import type { UserData } from "../interfaces/UserData";
// import auth from "../utils/auth";


interface UserListProps {
    users: UserData[] | null; 
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <>
            <h2>
                Check out all of your time capsules!
            </h2>
            {users && users.map((user) => (
                <div key={user.id}>
                    <div>
                        <h3>{user.id}. {user.username}</h3>
                    </div>
                    <div>
                        <h4><a href={`mailto:${user.email}`}>{user.email}</a></h4>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserList;
