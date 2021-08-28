import React from 'react';
import {CustomIcon} from '../../../components/CustomIcon'
import {Layout} from '../../../components/Layout'
// import { useEnableSync} from './EnableSync.useEnableSync'
import {Text} from '../../../components/Text'


export const EnableSync = () => {
    // const {online} = useEnableSync();
   const online = false

    if (!online) {
        return <Layout title="Ofline" 
    inverse
    padded
    primary={['Remind me later, "#"']}
    >
    <CustomIcon image= "noCloud" size="l" inverse />
    <Text size='m' inverse>
        Data syncing will be disabled, however you will be prompted again when online.
    </Text>
     </Layout>
    }
    return(
    <Layout title="Set up Sync" 
    inverse
    padded
    secondary={['Cancel, "/items/list"']}
    primary={['Continue, "#"']}
    >
    <CustomIcon image= "activeCloud" size="l" inverse />
    <Text size='m' inverse>
    We recommend that you set up data syncing on your profile.
         This allows you to back up and sync up data across devises.
    </Text>
     </Layout>
    );

    
}

export default EnableSync;