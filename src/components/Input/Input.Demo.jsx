import React from 'react'
import { Input } from './Input'

export const Demo = () => {
    return <div>
    <Input accepts="text" label="Text" />
    <Input accepts="password" label="password" />
    <Input accepts="email" label="email                             " />
    </div>
}

export default Demo