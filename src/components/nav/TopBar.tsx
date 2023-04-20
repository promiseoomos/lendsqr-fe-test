import React, { MouseEventHandler, useState } from "react";
import styles from "../../assets/styles/nav/topbar.module.scss"
import { ReactComponent as Logo } from "../../assets/svgs/lendsqrLogo.svg"
import { ReactComponent as NotiIcon } from "../../assets/svgs/NotiIcon.svg"
import userProfilePic from "../../assets/images/userProfilePic.png"
import { ArrowDownward, ArrowDropDown, SearchOutlined } from "@mui/icons-material";
import { ReactComponent as SearchIcon } from "../../assets/svgs/searchIcon.svg";
import BaseInput from "../base/BaseInput";
import { useMediaQuery, useTheme } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { MenuOpen } from "@mui/icons-material";

export interface CompProps{
    onHandleShowSidebar: MouseEventHandler<any>
}

export default function TopBar({ onHandleShowSidebar } : CompProps){
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('md'))
    const [ showNavMenu, setShowNavMenu] = useState(false)

    const handleShowNavMenu = () => {
        setShowNavMenu(!showNavMenu)
    }

    return (
        <div className={styles.topbar_wrapper}>
            <div className={styles.topbar_left_wrapper}>
                {
                    mobileScreen ?
                    <MenuOpen onClick={onHandleShowSidebar} style={{ marginLeft : '10px', marginTop: "3px"}} />
                    : ''
                }
                <Logo width={mobileScreen ? '100px' : "full"} />

                {
                    !mobileScreen ?
                        <div className={styles.topbar_left_search_wrapper}>
                            <BaseInput type="search" width={mobileScreen ? '200px' : '400px'} height="40px" placeholder="Search for anything" />
                            <div className={styles.topbar_left_search} color="white">
                                <SearchIcon/>
                            </div>
                        </div>
                    : ''
                }
                
            </div>
            
            
            {/* {
                mobileScreen ?
                    <div className={styles.topbar_right_wrapper}>
                        <MenuIcon onClick={handleShowNavMenu} style={{ marginLeft : '0px', marginTop: "15px"}} />
                    </div>
                : ''
            } */}
            {
                !mobileScreen ?
                    <div className={styles.topbar_right_wrapper}>
                        <p style={{ textDecoration: 'underline'}} className={styles.topbar_right_text}>Docs</p>
                        <NotiIcon className={styles.topbar_right_icon} />
                        <div className={styles.topbar_profile_wrapper}>
                            <img className={styles.topbar_right_image} src={userProfilePic} />
                            <p className={styles.topbar_right_text}>Adedeji</p>
                            <ArrowDropDown className={styles.topbar_right_icon} />
                        </div>
                    </div>
                    :   <div className={styles.topbar_right_wrapper}>
                            <p style={{ textDecoration: 'underline'}} className={styles.topbar_right_text}>Docs</p>
                            <NotiIcon className={styles.topbar_right_icon} />
                            <div className={styles.topbar_profile_wrapper}>
                                <img className={styles.topbar_right_image} src={userProfilePic} />
                                <p className={styles.topbar_right_text}>Adedeji</p>
                                <ArrowDropDown className={styles.topbar_right_icon} />
                            </div>
                        </div>

                // ?
                //     <div className={styles.topbar_responsive_wrapper}>
                //         <div className={styles.topbar_right_wrapper}>
                //             <p style={{ textDecoration: 'underline'}} className={styles.topbar_right_text}>Docs</p>
                //             <NotiIcon className={styles.topbar_right_icon} />
                //             <div className={styles.topbar_profile_wrapper}>
                //                 <img className={styles.topbar_right_image} src={userProfilePic} />
                //                 <p className={styles.topbar_right_text}>Adedeji</p>
                //                 <ArrowDropDown className={styles.topbar_right_icon} />
                //             </div>
                //         </div>

                //         <div className={styles.topbar_left_search_wrapper}>
                //             <BaseInput type="search" width={mobileScreen ? '200px' : '400px'} height="40px" placeholder="Search for anything" />
                //             <div className={styles.topbar_left_search} color="white">
                //                 <SearchIcon/>
                //             </div>
                //         </div>
                //     </div>
                // : ''
            }
            
        </div>
    )
}