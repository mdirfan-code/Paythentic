import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {
    const {name,label,value,error=null,type,onChange}= props; 
    return (
        <TextField 
                        fullWidth 
                        label={label}
                        name={name} 
                        value={value} 
                        onChange={onChange}
                        type={type}
                        {...(error && {error:true,helperText:error})}
                    />
    )
}
