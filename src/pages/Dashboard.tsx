import React from "react"
import DashboardLayoutFull from "../layouts/DashboardLayoutFull"
import styles from "../assets/styles/dashboard.module.scss"
import { Outlet } from "react-router-dom"

export default function Dashboard(){
    return (
        <div className={styles.wrapper}>
            <DashboardLayoutFull>
                <Outlet />
            </DashboardLayoutFull>
        </div>
    )
}