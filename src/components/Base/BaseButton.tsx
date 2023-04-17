import { useState } from "react"
import styles from "../../assets/styles/basebutton.module.scss"

export interface AppProps{
    width?: string,
    height?: string,
    text?: string,
    bgColor?: string;
    color?: string;
    onClick?: MouseEvent;
}


export default function BaseInput({ width = '400px', height = '50px', text = 'Save', bgColor = 'white', color= 'black' }: AppProps){

    return (
        <button style={{
                width: width,
                height: height,
                backgroundColor: bgColor,
                color: color
            }} 
            className={styles.inner}
        >
            { text }
        </button>
    )
}