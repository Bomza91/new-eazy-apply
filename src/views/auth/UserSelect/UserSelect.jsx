import { Layout } from '../../../components/Layout'
import { useUserSelect } from './UserSelect.useUserSelect'

export const UserSelect = () => {
    const { localUser } = useUserSelect();


    return <Layout secondary={['cancel', '/']} 
    primary={['User not listed', '/auth/signin']} title="Sign In">
         {localUser.map(({id, email }) => (
         <div>{id}: {email}</div>
         ))} 
         </Layout>
}

export default UserSelect