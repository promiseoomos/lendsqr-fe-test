import { useState } from "react"
import styles from "../../assets/styles/Base/button.module.scss"

export interface AppProps{
    width?: string,
    height?: string,
    text?: string,
    bgColor?: string;
    color?: string;
    border?:string;
    onClick?: MouseEvent;
}


export default function BaseButton({ width = '400px', height = '50px', text = 'Save', bgColor = 'white', color= 'black', border }: AppProps){

    return (
        <button style={{
                width: width,
                height: height,
                backgroundColor: bgColor,
                color: color,
                border: border
            }} 
            className={styles.inner}
        >
            { text }
        </button>
    )
}