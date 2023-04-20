import React from "react";
import styles from "../../assets/styles/nav/sidebar.module.scss"
import { ReactComponent as SwitchIcon } from "../../assets/svgs/switchIcon.svg"
import { ReactComponent as DashboardIcon } from "../../assets/svgs/dashboardIcon.svg"
import { ReactComponent as ArrowDownIcon } from "../../assets/svgs/arrowDownIcon.svg" 
import { ArrowDropDownSharp } from "@mui/icons-material";
import { sidebarsItems } from "../../assets/resources/sidebarItem";
import { Link, NavLink } from "react-router-dom";
import { Icon, SvgIcon } from "@mui/material";
import BaseIcon from "../base/BaseIcons";
import { ReactComponent as SignOutIcon } from "../../assets/svgs/signoutIcon.svg"
import { useNavigate } from "react-router-dom";

export interface CompProps{
}

export default function Sidebar(){
    const navigator = useNavigate();

    const logOut = () => {
        navigator("/login")
    }
    return (
        <div className={styles.sidebar_wrapper}>
            
            <div className={styles.sidebar_switch}>
                <SwitchIcon className={styles.sidebar_icon} />
                <p className={styles.sidebar_switch_title}>Switch Organization</p>
                <ArrowDownIcon style={{ marginTop: '8px'}} className={styles.sidebar_icon} />
            </div>

            <div className={styles.sidebar_dasboard}>
                <DashboardIcon className={styles.sidebar_icon} />
                <p className={styles.sidebar_dashboard_title}>Dashboard</p>
            </div>

            {
                sidebarsItems.map((itemWrapper, index) => 
                    <div key={index}>
                        <p className={styles.sidebar_items_wrapper_title}>{itemWrapper.name}</p>
                        {
                            itemWrapper.children.map(item => 
                                
                                    
                            <NavLink to={item.route} className={({ isActive, isPending}) => 
                                isActive ? [styles.sidebar_item_wrapper, styles.sidebar_item_wrapper_active].join(' ') : styles.sidebar_item_wrapper
                            }>
                                <div className={styles.sidebar_item_icon_wrapper}>
                                    <BaseIcon element={item.icon} />
                                </div>
                                
                                <p className={styles.sidebar_item_title}>{item.name}</p>
                            </NavLink>
                                   
                                
                            )
                        }
                    </div>
                )
            }

            <div className={styles.sidebar_footer}>
                <div className={styles.sidebar_item_wrapper} onClick={logOut}>
                    <div className={styles.sidebar_item_icon_wrapper} >
                        <SignOutIcon />
                    </div>
                    
                    <p className={styles.sidebar_item_title_full}>Logout</p>
                </div>

                <div className={styles.sidebar_item_wrapper}>
                    <p className={styles.sidebar_item_title_full_small}>v1.2.0</p>
                </div>
            </div>
        </div>
    )
}