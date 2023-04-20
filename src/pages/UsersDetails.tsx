import React, { useState, useEffect, MouseEvent, ChangeEventHandler, MouseEventHandler } from "react"
import styles from "../assets/styles/dashboard/users/users.module.scss";
import { ReactComponent as BackArrowIcon } from "../assets/svgs/backArrowIcon.svg"
import { ReactComponent as ProfileAvatarIcon } from "../assets/svgs/profileAvatarIcon.svg"
import BaseButton from "../components/base/BaseButton.tsx";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { StarRate, StarRateOutlined } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import UserGeneralTab from "../components/dashboard/UserGeneralTab.tsx";
import { formatNumber } from "../utilities/stringUtilities";

export default function UserDetails(){
    const [user, setUser ] = useState<any>({})
    const { userId } = useParams()
    const navigator = useNavigate()
    const [ queries, setQueries ] = useSearchParams("tab=general")

    const handleNavigate = () => {
        navigator(-1)
    }

    const handleTabChange : MouseEventHandler<HTMLDivElement> = (tab: any) => {
        setQueries(`tab=${tab.target.id}`)
    }
    useEffect(() => {
        axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`).then(({ data }) => {
            setUser(data)
        })
    }, [userId])

    return (
        <div className={styles.user_details_wrapper}>
            <div className={styles.back_wrapper}>
                <BackArrowIcon onClick={handleNavigate} style={{ marginTop: '7px', cursor: 'pointer'}} />
                <p>Back to Users</p>
            </div>

            <div className={styles.header_wrapper}>
                <div className={styles.header_left}>
                    User Details
                </div>

                <div className={styles.header_right_wrapper}>
                    <BaseButton width="170px" color="#E4033B" border="1px solid #E4033B" bgColor="white" text="Blacklist user" />
                    <BaseButton width="170px" color="#39CDCC" border="1px solid #39CDCC" bgColor="white" text="Activate User" />
                </div>
            </div>

            {
                Object.keys(user).length > 0 ?
                    <div className={styles.profile_card_wrapper}>
                        <div className={styles.profile_upper}>
                            <div className={styles.profile_upper_first}>
                                <div className={styles.profile_upper_avatar}>
                                    {
                                        user?.profile?.avatar.length > 0
                                        ? <img className={styles.profile_avatar_img} alt={user?.userName} src={user?.profile?.avatar}/>
                                        : <ProfileAvatarIcon />
                                    }
                                </div>

                                <div className={styles.profile_upper_avatar_text}>
                                    <p >{ user?.profile?.firstName} { user?.profile?.lastName}</p>
                                    <p>{ user?.profile?.bvn }</p>
                                    
                                </div>
                            </div>

                            <div className={styles.profile_upper_divider}></div>

                            <div className={styles.profile_upper_usertier}>
                                <p>User's Tier</p>
                                <div className={styles.profile_upper_usertier_stars_wrapper} color="#E9B200">
                                    <StarRate color="inherit" />
                                    <StarRateOutlined color="inherit" />
                                    <StarRateOutlined color="inherit" />
                                </div>
                                
                            </div>

                            <div className={styles.profile_upper_divider}></div>

                            <div className={styles.profile_upper_wallet}>
                                <p>₦{formatNumber(user?.accountBalance)}</p>
                                <p>{user?.accountNumber }/Providus Bank</p>
                            </div>

                        </div>

                        <div className={styles.profile_lower}>
                            <div className={queries.toString().split('=')[1] === 'general' ? styles.profile_lower_active : '' } id="general" onClick={handleTabChange}>
                                General Details
                            </div>
                            <div className={queries.toString().split('=')[1] === 'document' ? styles.profile_lower_active : '' } id="document" onClick={handleTabChange}>
                                Document
                            </div>

                            <div className={queries.toString().split('=')[1] === 'bank_details' ? styles.profile_lower_active : '' } id="bank_details" onClick={handleTabChange}>
                                Bank Details
                            </div>

                            <div className={queries.toString().split('=')[1] === 'loans' ? styles.profile_lower_active : '' } id="loans" onClick={handleTabChange}>
                                Loans
                            </div>

                            <div className={queries.toString().split('=')[1] === 'savings' ? styles.profile_lower_active : '' } id="savings" onClick={handleTabChange}>
                                Savings
                            </div>

                            <div className={queries.toString().split('=')[1] === 'apps_and_systems' ? styles.profile_lower_active : '' } id="apps_and_systems" onClick={handleTabChange}>
                                Apps and Systems
                            </div>
                        </div>

                    </div>
                :
                    <div className={styles.profile_card_wrapper}>
                        <div className={styles.profile_upper}>
                            <div className={styles.profile_upper_first}>
                                <div className={styles.profile_upper_avatar}>
                                    <Skeleton variant="circular" animation="wave" width="100px" height="100px" />
                                </div>

                                <div className={styles.profile_upper_avatar_text}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    
                                </div>
                            </div>

                            <div className={styles.profile_upper_divider}></div>

                            <div className={styles.profile_upper_usertier}>
                            
                                <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                <div className={styles.profile_upper_usertier_stars_wrapper} color="#E9B200">
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>
                                
                            </div>

                            <div className={styles.profile_upper_divider}></div>

                            <div className={styles.profile_upper_wallet}>
                                <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                            </div>

                        </div>

                        <div className={styles.profile_lower}>
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />

                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />

                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />

                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />

                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                        </div>

                    </div>
            }
            

            <div className={styles.content_card_wrapper}>
                {
                    queries.toString().split('=')[1] === 'general' 
                    ? <UserGeneralTab user={user} /> 
                    : queries.toString().split('=')[1] === 'document'
                    ? ''
                    : queries.toString().split('=')[1] === 'loans'
                    ? ''
                    : queries.toString().split('=')[1] === 'bank_details'
                    ? ''
                    : queries.toString().split('=')[1] === 'savings'
                    ? ''
                    : queries.toString().split('=')[1] === 'apps_and_systems'
                    ? ''
                    : ''
                }
            </div>

        </div>
    )
}