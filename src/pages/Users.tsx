import { useEffect, useMemo, useState } from "react"
import axios from "axios"
import styles from "../assets/styles/users.module.scss"
import { userCardItems } from "../assets/resources/userCardItems"
import BaseIcon from "../components/Base/BaseIcons"
import { ReactComponent as FilterIcon } from "../assets/svgs/filterIcon.svg"
import { Select } from "antd"
import { ReactComponent as ArrowLeftIcon } from "../assets/svgs/arrowLeftIcon.svg"
import { ReactComponent as ArrowRightIcon } from "../assets/svgs/arrowRigthIcon.svg"
import UsersTableItem from "../components/Dashboard/UsersTableItem"

export interface UserType{
    createdAt?: string,
}

const digitsArray = [ { value: 10, label: 10}, { value: 25, label: 25}, { value: 50, label: 50}, { value: 75, label: 75}, { value: 100, label: 100}]

export default function Users(){
    const [ users, setUsers ] = useState([])
    const [ pageSize, setPageSize ] = useState(10);
    const [ currentPage, setCurrentPage] = useState(1);
    const pageCount= useMemo(() => Math.ceil(users?.length/pageSize), [users, pageSize]);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users") ? localStorage.getItem("users") : [] ;
        setCurrentPage(1)

        if(storedUsers){
            setUsers(JSON.parse(storedUsers.toString()));
        }else{
            axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then(({ data }) => {
                setUsers(data)
                localStorage.setItem("users", JSON.stringify(data));
            })
        }
        
    }, [])
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

            <div className={styles.users_table_wrapper}>
                <div className={styles.users_table_headers_wrapper}>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>ORGANIZATION</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>USERNAME</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>EMAIL</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>PHONE NUMBER</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>DATE JOINED</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>STATUS</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon />
                        </div>
                    </div>
                </div>
                <div className={styles.users_table_items_wrapper}>
                    {
                        users.slice(0, pageSize * currentPage).splice(((currentPage * pageSize) - pageSize) + 1, pageSize).map((user : any, index) => (
                            
                            <UsersTableItem key={index} user={user} />     

                        ))
                    }
                    
                </div>

            </div>

            <div className={styles.pagination_wrapper}>
                <div className={styles.pagination_left_section}>
                    <p className={styles.pagination_left_section_text}>Showing</p>
                    <Select options={digitsArray} defaultValue={10} onChange={(value) => setPageSize(value)} style={{ width: '80px', backgroundColor: '#213F7D1A'}} />
                    <p className={styles.pagination_left_section_text}>Out of { users.length }</p>
                </div>

                <div className={styles.pagination_right_section}>
                    <div className={styles.pagination_right_section_arrow} onClick={() => currentPage == 1 ? currentPage :setCurrentPage(currentPage - 1)}>
                        <ArrowLeftIcon style={{ color: '#213F7D', display:'block'}} />
                    </div>

                    <div onClick={() => setCurrentPage(currentPage)} className={[styles.pagination_right_section_pages, styles.pagination_right_section_current_page].join(' ')}>{ (currentPage) }</div>
                    <div onClick={() => setCurrentPage(currentPage + 1)} className={styles.pagination_right_section_pages}>{ (currentPage + 1) < pageCount ? (currentPage + 1) : ''}</div>
                    <div onClick={() => setCurrentPage(currentPage + 2)} className={styles.pagination_right_section_pages}>{ (currentPage + 2) < pageCount ? (currentPage + 2) : '' }</div>
                    <div className={styles.pagination_right_section_pages}>...</div>
                    <div onClick={() => setCurrentPage(pageCount - 1)} className={styles.pagination_right_section_pages}>{ (pageCount - 1) }</div>
                    <div onClick={() => setCurrentPage(pageCount)} className={styles.pagination_right_section_pages}>{ (pageCount ) }</div>


                    <div className={styles.pagination_right_section_arrow} onClick={() => currentPage == pageCount ? pageCount : setCurrentPage(currentPage + 1)}>
                        <ArrowRightIcon style={{ color: '#213F7D', display:'block'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}