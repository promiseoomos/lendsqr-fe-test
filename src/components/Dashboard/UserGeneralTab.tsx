import React from "react"
import styles from "../../assets/styles/dashboard/users/generalTab.module.scss"
import { Skeleton } from "@mui/material"
import { formatNumber } from "../../utilities/stringUtilities"

export interface CompProps {
    user : any
}

export default function UsersGeneralTab({ user } : CompProps){
    return (
        <div>
            {
                Object.keys(user).length > 0
                ?
                    <div className={styles.container_wrapper}>
                        <div className={styles.tab_card_section}>
                            <p className={styles.tab_card_header} style={{ marginTop: '-30px'}}>Personal Information</p>

                            <div className={styles.tab_card_content_wrapper}>
                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>FULL NAME</p>
                                    <p className={styles.tab_card_content_text}>{user?.profile?.firstName} {user?.profile?.lastName}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>PHONE NUMBER</p>
                                    <p className={styles.tab_card_content_text}>{user?.profile?.phoneNumber}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>EMAIL ADDRESS</p>
                                    <p className={styles.tab_card_content_text}>{user?.email}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>BVN</p>
                                    <p className={styles.tab_card_content_text}>{user?.profile?.bvn}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>GENDER</p>
                                    <p className={styles.tab_card_content_text}>{user?.profile?.gender}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>MARITAL STATUS</p>
                                    <p className={styles.tab_card_content_text}>Single</p>
                                </div>
                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>CHILDREN</p>
                                    <p className={styles.tab_card_content_text}>None</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>TYPE OF RESIDENCE</p>
                                    <p className={styles.tab_card_content_text}>Parent's Apartment</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tab_card_divider}></div>

                        <div className={styles.tab_card_section}>
                            <p className={styles.tab_card_header}>Education and Employment</p>

                            <div className={styles.tab_card_content_wrapper_grid4}>
                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>LEVEL OF EDUCATION</p>
                                    <p className={styles.tab_card_content_text}>{user?.education?.level}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>EMPLOYMENT STATUS</p>
                                    <p className={styles.tab_card_content_text}>{user?.education?.employmentStatus}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>SECTOR OF EMPLOYMENT</p>
                                    <p className={styles.tab_card_content_text}>{user?.education?.sector}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>DURATION OF EMPLOYMENT</p>
                                    <p className={styles.tab_card_content_text}>{user?.education?.duration}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>OFFICE EMAIL</p>
                                    <p className={styles.tab_card_content_text}>{user?.education?.officeEmail}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>MONTHLY INCOME</p>
                                    <p className={styles.tab_card_content_text}>
                                        ₦{formatNumber(user?.education?.monthlyIncome[0])} - ₦{formatNumber(user?.education?.monthlyIncome[1])}
                                    
                                    </p>
                                </div>
                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>LOAN REPAYMENT</p>
                                    <p className={styles.tab_card_content_text}>₦{formatNumber(user?.education?.loanRepayment)}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tab_card_divider}></div>

                        <div className={styles.tab_card_section}>
                            <p className={styles.tab_card_header}>Socials</p>

                            <div className={styles.tab_card_content_wrapper}>
                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>TWITTER</p>
                                    <p className={styles.tab_card_content_text}>{user?.socials?.twitter}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>FACEBOOK</p>
                                    <p className={styles.tab_card_content_text}>{user?.socials?.facebook}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>INSTAGRAM</p>
                                    <p className={styles.tab_card_content_text}>{user?.socials?.instagram}</p>
                                </div>

                            </div>
                        </div>

                        <div className={styles.tab_card_divider}></div>

                        <div className={styles.tab_card_section}>
                            <p className={styles.tab_card_header}>Guarantor</p>

                            <div className={styles.tab_card_content_wrapper}>
                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>FULL NAME</p>
                                    <p className={styles.tab_card_content_text}>{user?.guarantor?.firstName} {user?.guarantor?.lastName}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>PHONE NUMBER</p>
                                    <p className={styles.tab_card_content_text}>{user?.guarantor?.phoneNumber}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>EMAIL ADDRESS</p>
                                    <p className={styles.tab_card_content_text}>{user?.guarantor?.email}</p>
                                </div>

                                <div className={styles.tab_card_content}>
                                    <p className={styles.tab_card_content_header}>RELATIONSHIP</p>
                                    <p className={styles.tab_card_content_text}>{user?.guarantor?.relationship}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                    <div className={styles.container_wrapper}>
                        <div className={styles.tab_card_section}>
                            <p className={styles.tab_card_header} style={{ marginTop: '-30px'}}><Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} /></p>

                            <div className={styles.tab_card_content_wrapper}>
                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>
                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>
                            </div>
                        </div>

                        <div className={styles.tab_card_divider}></div>

                        <div className={styles.tab_card_section}>
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />


                            <div className={styles.tab_card_content_wrapper_grid4}>
                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>
                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>
                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>
                            </div>
                        </div>

                        <div className={styles.tab_card_divider}></div>

                        <div className={styles.tab_card_section}>
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />


                            <div className={styles.tab_card_content_wrapper}>
                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                            </div>
                        </div>

                        <div className={styles.tab_card_divider}></div>

                        <div className={styles.tab_card_section}>
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />


                            <div className={styles.tab_card_content_wrapper}>
                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>

                                <div className={styles.tab_card_content}>
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: '1rem' ,width:'100px'}} />
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </div>
        
        
    )
}