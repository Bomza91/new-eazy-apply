import { useState } from 'react';
import { useMount } from 'react-use'
import { users } from '../../../api/users'

export const useLandingPage = () => {
    const [hasLocalUsers, setHasLocalUser] = useState(null)

    useMount(async () => {
        const response = await users.getUsers();
        setHasLocalUser(response && response.length > 0)
    })

    return {
        hasLocalUsers
    }
}

export default useLandingPage