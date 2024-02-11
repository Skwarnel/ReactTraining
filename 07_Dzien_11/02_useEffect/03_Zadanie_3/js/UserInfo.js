import React, {useState, useEffect} from 'react';

const UserInfo = () => {
    const [userName, setUserName] = useState("Gratoris Afokalis");
    useEffect(() => {
        console.log("Zmieniam imię i nazwisko");
        const idTimeout = setTimeout(() => {
            setUserName(prev => "Atos Arrakis")
        }, 3000);

        return () => clearTimeout(idTimeout);

    }, []);
    return (
        <div>
            {userName}
        </div>
    );
};

export default UserInfo;