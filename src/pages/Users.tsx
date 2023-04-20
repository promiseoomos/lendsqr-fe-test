import { useEffect, useMemo, useState, MouseEvent, ChangeEventHandler } from "react"
import axios from "axios"
import styles from "../assets/styles/dashboard/users/users.module.scss"
import { userCardItems } from "../assets/resources/userCardItems"
import BaseIcon from "../components/base/BaseIcons"
import { ReactComponent as FilterIcon } from "../assets/svgs/filterIcon.svg"
import { Select, DatePicker } from "antd"
import { ReactComponent as ArrowLeftIcon } from "../assets/svgs/arrowLeftIcon.svg"
import { ReactComponent as ArrowRightIcon } from "../assets/svgs/arrowRigthIcon.svg"
import UsersTableItem from "../components/dashboard/UsersTableItem.tsx"
import { Link } from "react-router-dom"
import { Popover, Skeleton } from "@mui/material"
import BaseInput from "../components/base/BaseInput.tsx"
import BaseButton from "../components/base/BaseButton.tsx"
import { flexbox } from "@mui/system"

export interface UserType{
    createdAt?: string,
}

const digitsArray = [ { value: 10, label: 10}, { value: 25, label: 25}, { value: 50, label: 50}, { value: 75, label: 75}, { value: 100, label: 100}]

export default function Users(){
    const [ users, setUsers ] = useState([])
    const [ pageSize, setPageSize ] = useState(10);
    const [ currentPage, setCurrentPage] = useState(1);
    const pageCount= useMemo(() => Math.ceil(users?.length/pageSize), [users, pageSize]);
    const [ anchorElement, setAnchorElement ] = useState<HTMLButtonElement | null>(null);

    const handleAnchor = (event: MouseEvent<any>) => {
        console.log(event);
        setAnchorElement(event.currentTarget)
    }
    const handlePopoverClose = (event: MouseEvent<any>) => {
        console.log(event);
        setAnchorElement(null)
    }
    const handleChange = (event: any) => {
        console.log(event)
    }

    const arraylength = users.slice(0, pageSize * currentPage).splice(((currentPage * pageSize) - pageSize) + 1, pageSize)

    const popoverItemStyles = {
        display: 'flex',
        justifyContent: 'flex-start',
        gap:'10px',
        color: '#545F7D',
        fontSize: '14px',
        padding: '10px 5px',
        cursor: 'pointer'

    }

    useEffect(() => {
        const storedUsers = localStorage.getItem("users") ? localStorage.getItem("users") : undefined ;
        setCurrentPage(1)

        if(storedUsers){
            setUsers(JSON.parse(storedUsers.toString()));
        }else{
            axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then(({ data }) => {
                setUsers(data)
                localStorage.setItem("users", JSON.stringify(data))
            })
        }
        
    }, [])
    return (
        <div className={styles.users_container_wrapper}>
            <p className={styles.user_header}>Users</p>

            <div className={styles.users_cards_wrapper}>
                {
                    userCardItems.map((item,index) => (
                        <div key={index} className={styles.users_card_item}>
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
                            <FilterIcon onClick={handleAnchor} />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>USERNAME</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon onClick={handleAnchor} />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>EMAIL</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon onClick={handleAnchor} />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>PHONE NUMBER</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon onClick={handleAnchor} />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>DATE JOINED</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon onClick={handleAnchor} />
                        </div>
                    </div>
                    <div className={styles.users_table_header_wrapper}>
                        <p className={styles.users_table_header_text}>STATUS</p>
                        <div className={styles.users_table_header_icon}>
                            <FilterIcon onClick={handleAnchor} />
                        </div>
                    </div>

                    <Popover id={'popover-item'} elevation={2} open={Boolean(anchorElement)} anchorEl={anchorElement} anchorOrigin={{ vertical: 'bottom',horizontal: 'left',}} 
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        onClose={handlePopoverClose}
                    >
                        <div style={{ width: '270px', padding: '22px'}} className={styles.users_table_filter_popover}>
                        
                            <div style={{ marginTop: "20px"}}>
                                <p style={{ fontWeight: 500, color: "#545F7D", fontSize: "14px"}}>Organization</p>
                                <Select defaultValue={'select'} options={[{ value:'select', label: 'Select'}]} size="large" style={{ width: '230px', marginTop: "5px"}} onChange={handleChange}/>
                            </div>

                            <div style={{ marginTop: "20px"}}>
                                <p style={{ fontWeight: 500, color: "#545F7D", fontSize: "14px"}}>Username</p>
                                <BaseInput width='230px' height="40px" placeholder="User"/>
                            </div>

                            <div style={{ marginTop: "20px"}}>
                                <p style={{ fontWeight: 500, color: "#545F7D", fontSize: "14px"}}>Email</p>
                                <BaseInput type="email" width='230px' height="40px" placeholder="Email"/>
                            </div>

                            <div style={{ marginTop: "20px"}}>
                                <p style={{ fontWeight: 500, color: "#545F7D", fontSize: "14px"}}>Date</p>
                                <DatePicker size="large"  placeholder="Date" style={{ width: '230px', marginTop: "5px"}}/>
                            </div>

                            <div style={{ marginTop: "20px"}}>
                                <p style={{ fontWeight: 500, color: "#545F7D", fontSize: "14px"}}>Phone Number</p>
                                <BaseInput width='230px' height="40px" placeholder="Phone Number"/>
                            </div>

                            <div style={{ marginTop: "20px"}}>
                                <p style={{ fontWeight: 500, color: "#545F7D", fontSize: "14px"}}>Status</p>
                                <Select defaultValue={'select'} options={[{ value:'select', label: 'Select'}]} size="large" style={{ width: '230px', marginTop: "5px"}} onChange={handleChange}/>
                            </div>

                            <div style={{ display: 'flex', gap: "15px", marginTop: "30px"}}>
                                <BaseButton bgColor="white" color="#545F7D" text="Reset" width="100px" border="1px solid #545F7D" />
                                <BaseButton bgColor="#39CDCC" color="white" text="Filter" width="100px" />
                            </div>
                            
                        </div>
                    </Popover>
                </div>
                
                {
                    users.length > 0 
                    ?
                        
                        <div className={styles.users_table_items_wrapper}>
                            {
                                
                                users.slice(0, pageSize * currentPage).splice(((currentPage * pageSize) - pageSize) + 1, pageSize).map((user : any, index) => (
                                    <UsersTableItem key={user.id} user={user} />     
                                ))
                            }
                            
                        </div>
                    :
                        <div className={styles.users_table_items_wrapper}>
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '2.5rem' ,width:'100%'}} />
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '2.5rem' ,width:'100%'}} />
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '2.5rem' ,width:'100%'}} />
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '2.5rem' ,width:'100%'}} />
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '2.5rem' ,width:'100%'}} />
                            <Skeleton variant="text" animation="wave" sx={{ fontSize: '2.5rem' ,width:'100%'}} />
                        </div>
                }

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