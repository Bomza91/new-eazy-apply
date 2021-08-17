import React from 'react'
import styled  from 'styled-components'
import { ButtonBase, Avatar } from '@material-ui/core'
import tokens, { token } from '../../data/tokens'
import {Text} from '../Text'
import { ArrowForwardIos as ArrowIcon, Star as StarIcon} from '@material-ui/icons'
import { Children } from 'react'

const Base = styled(ButtonBase)`
    min-height: 10rem;
    width: 100%;
    border-botton: 1px solid
     rgba(${tokens.colors.black}, ${tokens.opacity.subtler});
    text-align: left;
    justify-content: flex-start;
    padding:${tokens.spacing.i};
    
    &:hover{
        background: rgba(${tokens.colors.purple}, ${tokens.opacity.subtler});
    }
    `
    const Image = sytled(Avatar)`
        width: ${({size}) => tokens.images[size]};
        height: ${({size}) => tokens.images[size]};
        border-radius: ${tokens.radius.strong};
        margin-right: ${tokens.spacing.m};
        display: none;
        background-color: rgb(${tokens.colors.purple})

        @media (min-width: 400px){
            display: flex;
            align-items:center;
            justify-content:center;
        }

    `
    const StarBase = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    border: 1.5rem solid transparent;
    border-top-color: rgb(${tokens.colors.purple});
    border-right-color: rgb(${tokens.colors.purple});
       
    `
    const Info = styled.div`
    flex-grow: 1;
    `
    const TittleWrap = styled.div`
    padding-botton: ${tokens.spacing.xs};
    `
    const StyledStar = styled.div`
        position: absolute;
        top: ${tokens.spacing.s};
        right: ${tokens.spacing.s};
        width: ${tokens.images.xs};
        height:${tokens.images.xs};
        color: white;
    `
    const extractAbbr = (string) => {
        const firstLetter = string[0];
        const extraLetters = string
        .match(/\s\w/g)
        .map(val => val[1])
        .map(val => val.toUpperCase())
        .slice(0,2)
    
        return `${firstLetter} ${extraLetters.joinO('')}`;
    }
    
export const ItemPreview = (props) => {
    const { title, helper, size = "s", image , starred = false, children} = props;

    const abbr = image ? null : extractAbbr(tittle);

    return (
        <Base href='#'>
           <Image size={size} src={image} alt=""> {abbr}</Image>
             
        
        <Info>

        <TittleWrap>
         <Text siz ="1" line={2}>{title}</Text>
         </TittleWrap>
         <children />
         <Text siz ="m" line={1}>{helper}</Text>
         </Info>

     <ArrowIcon />

     {starred && <StarBase />}

     {starred && <StyledStar />}
   
     </Base>
    )
}
export default ItemPreview