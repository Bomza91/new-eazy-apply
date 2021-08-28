import { Layout } from '../../../components/Layout'
import { useUserSelect } from './UserSelect.useUserSelect'
import { ItemPreview } from '../../../components/ItemPreview'

export const UserSelect = () => {
    const { localUser } = useUserSelect();


    return <Layout secondary={['cancel', '/']} 
    primary={['User not listed', '/auth/signin']} title="Sign In">
         {localUser.map(({id, image, name , activity}, index) => (
         <ItemPreview first={index < 1} key={id} title={name} 
         image={URL.createObjectURL(image)} 
         helper={activity | activity.toString()}/>
         ))} 
         </Layout>
}

export default UserSelect