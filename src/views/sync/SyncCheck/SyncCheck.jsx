import React from 'react'
import { Redirect } from 'react-router-dom';
import { CustomIcon } from "../../../components/CustomIcon";
import { Layout } from "../../../components/Layout";
import { useSyncCheck } from "./SyncCheck.useSyncCheck";
import { Text } from "../../../components/Text";

export const SyncCheck = () => {
    const { online, user, cancelVerification } = useSyncCheck();

    if (!user) {
        return null;
    }

    if (user.type === 'online') {
        return <Redirect to="/items/list" />
    }

    if (user.type === 'verifying') {
        return (
            <Layout 
            title="Email Sent"
            inverse
            padded
            primary={["Remind me later", "/items/list"]}
            secondary={['Cancel Verification', cancelVerification]}
            >
                <CustomIcon image="noCloud" size="l" inverse />
                <Text size="m" inverse>
                    An email has been sent to "<em>{user.email}</em>".
                    Please check your inbox or spam folder and click the link inside the email.
                </Text>
            </Layout>
        )
    }

    console.log(user.type)

    if (!online) {
        return (
           <Layout 
           title="offline"
           inverse
           padded
           primary={['Remind me later', "/items/list"]}
           />
        )
    }
}

export default SyncCheck