import { useState, useContext } from 'react'
import { context as authContext } from '../../../hooks/useAuth'
import { useHistory } from 'react-router-dom'

export const useCreatePhoto = () => {
    const { createLocalAccount } = useContext(authContext)
    const history = useHistory();
    const { state } = useLocation();

       if (!state || !state.name) history.push('/create/name')
 

    return {
        setName,
        name,
        alert,
        save,
    }
}

export default useCreatePhoto