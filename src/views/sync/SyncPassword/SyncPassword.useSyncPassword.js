import { useNetworkState} from 'react-use'

<<<<<<< HEAD:src/views/sync/SyncPassword/SyncPassword.useSyncPassword.js
export const useSyncPassword = () => {
    const history = useHistory();
    const [name, setName] = useState('')
    const [alert, setAlert] = useState(null)
=======
>>>>>>> main:src/views/create/EnableSync/EnableSync.useEnableSync.js

export const useEnableSync = () => {
    const {online} = useNetworkState()
    

    return {
        online
    }
}

<<<<<<< HEAD:src/views/sync/SyncPassword/SyncPassword.useSyncPassword.js
export default useSyncPassword
=======
export default useEnableSync
>>>>>>> main:src/views/create/EnableSync/EnableSync.useEnableSync.js
