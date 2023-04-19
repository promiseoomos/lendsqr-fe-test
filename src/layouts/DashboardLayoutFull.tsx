import React from "react";
import { PropsWithChildren } from "react";
import Sidebar from "../components/nav/Sidebar"
import TopBar from "../components/nav/TopBar"
import styles from "../assets/styles/layouts/dashboardlayout.module.scss"

export interface CompProps {

}

export default function DashboardLayoutFull({ children }: PropsWithChildren<CompProps>){
    
    return (
        <div>
            <TopBar />
            <div className={styles.wrapper_body}>
                <div className={styles.dashboard_sidebar}>
                    <Sidebar/>
                </div>

                <div className={styles.dashboard_content}>
                    { children }
                </div>
                
                
            </div>
            
        </div>
    )
}