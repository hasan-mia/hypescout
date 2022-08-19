import { useEffect, useState } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoad, setIsLoad] = useState(true);
    useEffect(()=>{
        fetch(`data/user.json`)
        .then((res) => res.json())
        .then((data) => setUsers(
        data, setIsLoad(false)));

    },[users, isLoad]);

    return {users, isLoad}
};

export default useUsers;