import { useState, useEffect, useLayoutEffect } from 'react';
import TimeCapsuleForm from '../components/TimeCapsuleForm';
import TimeCapsuleList from '../components/TimeCapsuleList';
import { retrieveUsers } from '../api/user';
import ErrorPage from './ErrorPage';
import auth from '../utils/auth';

function Home() {
    const [timeCapsuleList, setCapsule] = useState([]);
    const [error, setError] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);
    const [editingCapsule, setEditingCapsule] = useState(null);

    useEffect(() => {
        if (loginCheck) {
            fetchTimeCapsules();
        }
    }, [loginCheck]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    const fetchTimeCapsules = async () => {
        try {
            const data = await retrieveUsers();
            setCapsule(data)
        } catch (err) {
            console.error('Failed to retrieve time capsules:', err);
            setError(true);
        }
    }

    const removeTimeCapsule = (name: string) => {
        const updatedTimeCapsule = timeCapsuleList.filter((item) => item.name !== name);
        setCapsule(updatedTimeCapsule);
    };

    const editTimeCapsule = (itemName: string, newValue: string) => {
        if (!newValue.text) {
            return;
        }

        setCapsule((prev) =>
            prev.map((item) => (item.name === itemName ? newValue : item))
        );
        setEditingCapsule(null);
    };
    const handleEditClick = (capsule) => {
        setEditingCapsule(capsule);
    }
    if (error) {
        return <ErrorPage />;
    }

    return (
        <div>
            <h1>Here are your time capsules:</h1>
            {editingCapsule ? (
                <TimeCapsuleForm initialData={editingCapsule}
                onSubmit={(newValue) => editTimeCapsule(editingCapsule.name, newValue)}
                />
            ) : (
                <TimeCapsuleForm onSubmit={addTimeCapsule} />
            )}
            <TimeCapsuleList
                timeCapsuleList={timeCapsuleList}
                removeTimeCapsule={removeTimeCapsule}
                editTimeCapsule={editTimeCapsule}
            />
        </div>
    );
}

export default Home;
