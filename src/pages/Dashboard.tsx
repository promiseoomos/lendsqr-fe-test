import React from "react"
import DashboardLayoutFull from "../layouts/DashboardLayoutFull"
import DashboardLayoutMobile from "../layouts/DashboardLayoutMobile"
import styles from "../assets/styles/dashboard/dashboard.module.scss"
import { Outlet } from "react-router-dom"
import { useMediaQuery, useTheme } from "@mui/material"

export default function Dashboard(){

    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <div className={styles.wrapper}>
            {
                mobileScreen 
                ?
                    <DashboardLayoutMobile>
                        <Outlet />
                    </DashboardLayoutMobile>
                :
                    <DashboardLayoutFull>
                        <Outlet />
                    </DashboardLayoutFull>
            }
            
        </div>
    )
}