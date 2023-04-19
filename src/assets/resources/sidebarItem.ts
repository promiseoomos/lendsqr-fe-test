import { ReactComponent as UsersIcon } from "../../assets/svgs/usersIcon.svg"
import { ReactComponent as GuarantorsIcon } from "../../assets/svgs/guarantorsIcon.svg"
import { ReactComponent as LoansIcon } from "../../assets/svgs/loansIcon.svg"
import { ReactComponent as DecisionModelIcon } from "../../assets/svgs/decisionModelIcon.svg"
import { ReactComponent as SavingsIcon } from "../../assets/svgs/savingsIcon.svg"
import { ReactComponent as LoanProductIcon } from "../../assets/svgs/loanProductIcon.svg"
import { ReactComponent as whitelistIcon } from "../../assets/svgs/whitelistIcon.svg"
import { ReactComponent as KarmaIcon } from "../../assets/svgs/karmaIcon.svg"
import { ReactComponent as feesAndChargesIcon } from "../../assets/svgs/feesAndChargesIcon.svg"
import { ReactComponent as SavingsProductIcon } from "../../assets/svgs/savingsProductIcon.svg"
import { ReactComponent as servicesIcon } from "../../assets/svgs/servicesIcon.svg"
import { ReactComponent as serviceAccountIcon } from "../../assets/svgs/serviceAccountIcon.svg"
import { ReactComponent as settlementsIcon } from "../../assets/svgs/settlementsIcon.svg"
import { ReactComponent as reportsIcon } from "../../assets/svgs/reportsIcon.svg"
import { ReactComponent as preferencesIcon } from "../../assets/svgs/preferencesIcon.svg"
import { ReactComponent as feesAndPricingIcon } from "../../assets/svgs/feesAndPricingIcon.svg"
import { ReactComponent as auditLogsIcon } from "../../assets/svgs/auditLogsIcon.svg"






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
            },
            {
                name: "Loans",
                icon: LoansIcon,
                route: "loans"
            },
            {
                name: "Decision Models",
                icon: DecisionModelIcon,
                route: "decision"
            },
            {
                name: "Savings",
                icon: SavingsIcon,
                route: "savings"
            },
            {
                name: "Loan Requests",
                icon: LoanProductIcon,
                route: "loans"
            },
            {
                name: "Whitelist",
                icon: whitelistIcon,
                route: "whitelist"
            },
            {
                name: "Karma",
                icon: KarmaIcon,
                route: "karma"
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
            },
            {
                name: "Loan Products",
                icon: LoanProductIcon,
                route: "loan/product"
            },
            {
                name: "Savings Product",
                icon: SavingsProductIcon,
                route: "savings/product"
            },
            {
                name: "Fees & Charges",
                icon: feesAndChargesIcon,
                route: "fees/"
            },
            {
                name: "Transactions",
                icon: LoanProductIcon,
                route: "transactions"
            },
            {
                name: "Services",
                icon: servicesIcon,
                route: "services"
            },
            {
                name: "Service Account",
                icon: serviceAccountIcon,
                route: "service/account"
            },
            {
                name: "Settlements",
                icon: settlementsIcon,
                route: "settlement"
            },
            {
                name: "Reports",
                icon: reportsIcon,
                route: "reports"
            }
        ]
    },
    {
        name: "SETTINGS",
        children: [
            {
                name: "Preferences",
                icon: preferencesIcon,
                route: "preferences"
            },
            {
                name: "Fees and Pricing",
                icon: feesAndPricingIcon,
                route: "pricing"
            },
            {
                name: "Audit Logs",
                icon: auditLogsIcon,
                route: "audit"
            }
        ]
    }
]