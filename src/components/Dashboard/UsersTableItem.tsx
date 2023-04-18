import styles from "../../assets/styles/users.module.scss"
import { capitalize } from "../../utilities/stringUtilities"
import { format } from "date-fns"
import { ReactComponent as ActionsIcon } from "../../assets/svgs/actionsIcon.svg"

export default function UsersTableItem(props: any){
    return (
        <div key={props.user.id} className={styles.users_table_item_wrapper}>
            <div className={styles.users_table_item}>{capitalize(props.user.orgName)}</div>
            <div className={styles.users_table_item}>{props.user.userName}</div>
            <div className={styles.users_table_item}>{props.user.email}</div>
            <div className={styles.users_table_item}>{props.user.phoneNumber}</div>
            <div className={styles.users_table_item}>{format(new Date(props.user.createdAt ? props.user.createdAt : null ), 'LLL dd, yyyy HH:mm aa ')}</div>
            <div className={[styles.users_table_item, styles.users_table_item_status_wrapper].join(' ')}>
                <div className={[styles.users_table_item_status, props.user.status === 'active' ? styles.users_table_item_active : props.user.status == 'inactive' ? styles.users_table_item_inactive : props.user.status == 'pending' ? styles.users_table_item_pending : props.user.status == 'blacklisted' ? styles.users_table_item_blacklisted : styles.users_table_item_active ].join(' ')}>
                    {capitalize(props.user.status)}
                </div>
                <ActionsIcon style={{ marginTop: '3px'}} />
            </div>
        </div>
    )
}