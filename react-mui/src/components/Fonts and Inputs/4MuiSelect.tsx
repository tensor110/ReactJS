// Select Button
import {Box, TextField, MenuItem, Button} from '@mui/material'
import React, {useState} from 'react'

export const MuiSelect = () =>{
    const [countries,setCountries]=useState<string[]>([])
    console.log({countries});
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const value= event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    
    return(
        <Box width='250px'>
            <TextField label='Select Countries' select value={countries} onChange={handleChange} fullWidth SelectProps={{multiple:true}} size='small' color='secondary' helperText='Select your countries' error>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
    )
}