

import Button from '@mui/material/Button';
import styles from "./MyButton.style.module.css";

interface MyButtonProps {
        text: string,
        onClick : () => void; 
}

export default function MyButton  (props : MyButtonProps) {
        return <Button className={styles.button}  variant="outlined" onClick={props.onClick}>{props.text}</Button>
}
