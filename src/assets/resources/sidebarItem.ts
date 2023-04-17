import { ReactComponent as UsersIcon } from "../../assets/svgs/usersIcon.svg"
import { ReactComponent as GuarantorsIcon } from "../../assets/svgs/guarantorsIcon.svg"

export interface SideBar {
    name: string;
    children: object[]
}
export const sidebarsItems = [
    {
        name: "CUSTOMERS",
        children: [
            {
                name: "Users",
                icon: UsersIcon,
                route: "users"
            },
            {
                name: "Guarantors",
                icon: GuarantorsIcon,
                route: "guarantors"
            }
        ]
    },
    {
        name: "BUSINESSES",
        children: [
            {
                name: "Organization",
                icon: GuarantorsIcon,
                route: "organization",
            }
        ]
    }
]