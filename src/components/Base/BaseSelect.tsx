import { useState, ChangeEventHandler } from "react"
import styles from "../../assets/styles/Base/select.module.scss"

export interface Options{
    text: string;
    value:string
}
export interface AppProps{
    width?: string,
    height?: string,
    text?: string,
    bgColor?: string;
    color?: string;
    onClick?: MouseEvent;
    onChange: ChangeEventHandler<HTMLSelectElement>
    options?: Options[]
}


export default function BaseSelect({ width = '400px', height = '40px', text = 'Save', bgColor = 'white', color= 'black', onChange, options = [{ value: 'select', text: 'Select'}] }: AppProps){

    return (
        <select
            style={{
                width: width,
                height: height,
                backgroundColor: bgColor,
                color: color
            }}
            className={styles.select_wrapper} onChange={onChange}>
            {
                options.map((option, index) => (
                    <option className={styles.select_option} value={option.value}>{ option.text }</option>
                ))
            }
        </select>
    )
}