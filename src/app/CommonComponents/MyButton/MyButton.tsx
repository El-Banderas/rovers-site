

import Button from '@mui/material/Button';

interface MyButtonProps {
        text: string,
        onClick : () => void; 
}

export default function MyButton  (props : MyButtonProps) {
        return <Button  variant="outlined" onClick={props.onClick}>{props.text}</Button>
}
