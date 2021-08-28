import React from 'react'
import {SvgIcon} from '@material-ui/core'
import styled from 'styled-components'
import { tokens } from '../data/tokens'

/**
 * 
 * @typedef { 'noCoud' | 'activateCloud' | 'email'} image
 */

const noCloud =(
    <div>
    dontHave
    </div>
)

const ActiveCloud =(
     <div>
    dontHave
    </div>
)

const Email =(
    <div>
    dontHave
    </div>
)

const icons = {
    noCloud,
    ActiveCloud,
    Email
}
/**
 * @typedef {'noCloud' | 'activeCloud' | 'email'} image
 */

/**
 * 
 * @typedef {object} props
 * @property {image} image
 * @property {'l'} size
 * @property {boolean} inverse 
 */

const Base = styled(SvgIcon)`
  color: ${({ $inverse }) => `rgb(${($inverse ? tokens.colors.white : tokens. colors.black)})`};
  width: ${({ size }) => tokens.images[size]};
  height: ${({ size }) => tokens.images[size]};
`
/**
 * 
 * @param {Props} props 
 * @returns {JSX.Element} 
 */
export const CustomIcom = (props) => {
   const {image, inverse=false, size} = props

   if (image === 'activeCloud'){
       <Base $inverse={inverse} size={size} viewBox >
       none
       </Base>

   }

   if (image === 'noCloud'){
    <Base $inverse={inverse} size={size} viewBox >
    none
    </Base>

}

if (image === 'image'){
    <Base $inverse={inverse} size={size} viewBox >
    none
    </Base>

}
   
}

export default CustomIcom