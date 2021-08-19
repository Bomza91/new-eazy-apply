import { useState } from 'react';
import { useMount } from 'react-use';
import { users } from '../../../api/users';

export const useUserSelect = () => {
    const [localUsers, setLocalUser] = useState(null)

    useMount(async () => {
        const response = await users.getUsers();
        setLocalUser(response)
    })

    return {
        localUsers
    }
}

export default useUserSelect