import React from "react";
import { PropsWithChildren } from "react";
import Sidebar from "../components/Nav/Sidebar"
import TopBar from "../components/Nav/TopBar"
import styles from "../assets/styles/dashboardlayout.module.scss"

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