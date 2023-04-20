import { useState, MouseEvent, MouseEventHandler } from "react"
import styles from "../../assets/styles/base/button.module.scss"

export interface AppProps{
    width?: string,
    height?: string,
    text?: string,
    bgColor?: string;
    color?: string;
    border?:string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


export default function BaseButton({ width = '400px', height = '50px', text = 'Save', bgColor = 'white', color= 'black', border, onClick }: AppProps){

    return (
        <button style={{
                width: width,
                height: height,
                backgroundColor: bgColor,
                color: color,
                border: border
            }} 
            className={styles.inner}
            onClick={onClick}
        >
            { text }
        </button>
    )
}