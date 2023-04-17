import { useEffect, useState } from "react"
import axios from "axios"
import styles from "../assets/styles/users.module.scss"
import { userCardItems } from "../assets/resources/userCardItems"
import BaseIcon from "../components/Base/BaseIcons"

export default function Users(){
    const [ users, setUsers ] = useState([])
    useEffect(() => {
        axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then(({ data }) => {
            setUsers(data)
            console.log(data)
        })
    })
    return (
        <div className={styles.users_container_wrapper}>
            <p className={styles.user_header}>Users</p>

            <div className={styles.users_cards_wrapper}>
                {
                    userCardItems.map(item => (
                        <div className={styles.users_card_item}>
                            <div className={styles.user_card_base_icon}>
                                <BaseIcon element={item.icon} />
                            </div>
                            <p className={styles.user_card_title}>{ item.title }</p>
                            <p className={styles.user_card_value}>{ item.value }</p>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}