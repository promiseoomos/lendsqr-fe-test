import React, { useState } from "react";
import { PropsWithChildren } from "react";
import Sidebar from "../components/nav/Sidebar.tsx"
import TopBar from "../components/nav/TopBar.tsx"
import styles from "../assets/styles/layouts/dashboardlayout.module.scss"
import { AppBar } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material"

export interface CompProps {

}

export default function DashboardLayoutMobile({ children }: PropsWithChildren<CompProps>){

    const [ showSidebar, setShowSidebar ] = useState(false)

    return (
        <div>
            <TopBar onHandleShowSidebar={() => setShowSidebar(!showSidebar)} />
            <div className={styles.wrapper_body}>
                {

                    showSidebar ?
                        <div className={styles.dashboard_sidebar}>
                            <Sidebar/>
                        </div>
                    : 
                        ''
                        

                }

                <div className={styles.dashboard_content}>
                    { children }
                </div>
                
                
            </div>
            
        </div>
    )
}