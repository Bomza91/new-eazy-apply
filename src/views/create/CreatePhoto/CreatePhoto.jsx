import React from 'react';
import styled from 'styled-components';
import { useDropzone } from "react-dropzone";

import useCreatePhoto from './CreatePhoto.useCreatePhoto';
import { ALERTS } from './CreatePhoto.constants'
import { Layout } from '../../../components/Layout'
import { Input } from '../../../components/Input'
import { Text } from '../../../components/Text'
import { tokens } from '../../../data/tokens'
import { ButtonBase } from '@material-ui/core';

const InputWrap = styled.div`
    padding: ${tokens.spacing.l} 0;
`

const Image = styled(ButtonBase)`
    height: ${tokens.images.l};
    width: ${tokens.images.l};
    position: relative;
    border-radius: ${tokens.radius.strong};
    background: rgba(${tokens.colors.black}, ${tokens.opacity.subtler});

    &:hover {
        background: rgba(${tokens.colors.black}, ${tokens.opacity.subtler});
    }
`;

const Camera = styled.div`
   position: absolute;
   width: 100px;
   height: 100px;
   background: rgba(${tokens.colors.purple});
`

export const CreatePhoto = () => {
    const { name, setName, alert, save} = useCreatePhoto();

    const onDrop = ([file]) => { console.log(file) }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

    return (
    <Layout 
    title="Photo" 
    primary={['Continue', save]} 
    secondary={['Cancel', "/"]}
    alert={ALERTS[alert]}
    >

       <Text size="m">Please provide a photo or image to be associated with this account.</Text>
       <InputWrap>
       <Image {...getRootProps} >
           <Camera>as</Camera>
           <Input {...getInputProps} />
            {
                isDragActive ? 'drag' : 'not-drag'
            }
       </Image>
       </InputWrap>
        </Layout>)
}

export default CreatePhoto;