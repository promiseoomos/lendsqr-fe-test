import styles from "../../assets/styles/dashboard/users/users.module.scss"
import { capitalize } from "../../utilities/stringUtilities"
import { format } from "date-fns"
import { ReactComponent as ActionsIcon } from "../../assets/svgs/actionsIcon.svg"
import { Popover } from "@mui/material"
import { useState, MouseEvent } from "react"
import { ReactComponent as ViewDetailsIcon } from "../../assets/svgs/viewDetailsIcon.svg"
import { ReactComponent as BlacklistUserIcon } from "../../assets/svgs/blacklistUserIcon.svg"
import { ReactComponent as ActivateUserIcon } from "../../assets/svgs/activateUserIcon.svg"
import { Link } from "react-router-dom"

export default function UsersTableItem(props: any){
    const [ anchorElement, setAnchorElement ] = useState<HTMLButtonElement | null>(null);

    const handleAnchor = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        setAnchorElement(event.currentTarget)
    }
    const handlePopoverClose = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        setAnchorElement(null)
    }
    const statuses = ["active", "pending", "blacklisted", "inactive"]
    const randomIndex = Math.floor(Math.random() * statuses.length);
    props.user.status = statuses[randomIndex]

    const popoverItemStyles = {
        display: 'flex',
        justifyContent: 'flex-start',
        gap:'10px',
        color: '#545F7D',
        fontSize: '14px',
        padding: '10px 5px',
        cursor: 'pointer'

    }
    return (
        <div className={styles.users_table_item_wrapper}>
            <div className={styles.users_table_item}>{capitalize(props.user.orgName)}</div>
            <div className={styles.users_table_item}>{props.user.userName}</div>
            <div className={styles.users_table_item}>{props.user.email}</div>
            <div className={styles.users_table_item}>{props.user.phoneNumber}</div>
            <div className={styles.users_table_item}>{format(new Date(props.user.createdAt ? props.user.createdAt : null ), 'LLL dd, yyyy HH:mm aa ')}</div>
            <div className={[styles.users_table_item, styles.users_table_item_status_wrapper].join(' ')}>
                <div className={[styles.users_table_item_status, props.user.status === 'active' ? styles.users_table_item_active : props.user.status == 'inactive' ? styles.users_table_item_inactive : props.user.status == 'pending' ? styles.users_table_item_pending : props.user.status == 'blacklisted' ? styles.users_table_item_blacklisted : styles.users_table_item_active ].join(' ')}>
                    {capitalize(props.user.status)}
                </div>
                <button style={{ cursor: 'pointer'}} onClick={handleAnchor}>
                    <ActionsIcon  style={{ marginTop: '3px', cursor: 'pointer'}} />
                </button>
                

                <Popover id={'popover-item'} open={Boolean(anchorElement)} anchorEl={anchorElement} anchorOrigin={{ vertical: 'bottom',horizontal: 'left',}} 
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    onClose={handlePopoverClose}
                >
                    <div style={{ width: '220px', padding: '22px'}} className={styles.users_table_popover}>
                        <Link to={`${props.user.id}?tab=general`} style={popoverItemStyles} 
                            className={styles.users_table_popover_item}
                        >
                            <ViewDetailsIcon style={{ marginTop: '4px'}} />
                            <p>View Details</p>
                        </Link>

                        <Link to={`${props.user.id}?tab=general`} style={popoverItemStyles} 
                            className={styles.users_table_popover_item}
                        >
                            <BlacklistUserIcon style={{ marginTop: '4px'}} />
                            <p>Blacklist User</p>
                        </Link>

                        <Link to={`${props.user.id}?tab=general`} style={popoverItemStyles} 
                            className={styles.users_table_popover_item}
                        >
                            <ActivateUserIcon style={{ marginTop: '4px'}} />
                            <p>Activate User</p>
                        </Link>
                    </div>
                </Popover>
            </div>
        </div>
    )
}