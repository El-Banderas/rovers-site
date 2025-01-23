import * as React from 'react'
import Slider, { SliderThumb } from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// From here:
// https://stackoverflow.com/questions/72268242/how-to-place-icon-at-the-end-in-linear-progress-bar-mui
const CheckMarkSlider = styled(Slider)(({ theme }) =>
({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb':
  {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    transform: 'rotate(45dg)',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .checkmark-bar':
    {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track':
  {
    height: 3,
  },
  '& .MuiSlider-rail':
  {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}))

const CheckMarkThumbComponent = (props : any) =>
{
  const { children, ...other } = props

  return (
    <SliderThumb {...other}>
      {children}
      <RocketLaunchIcon />
    </SliderThumb>
  )
}

export default function CustomeSlider ({value} : {value : number}) 
{
  return (
    <Box sx={{ width: 320 }}>
      <CheckMarkSlider
        value = {value}
        disabled
        components={{ Thumb: CheckMarkThumbComponent }} />
    </Box>
  )
}