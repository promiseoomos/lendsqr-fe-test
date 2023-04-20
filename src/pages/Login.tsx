import { ReactComponent as Logo } from "../assets/svgs/lendsqrLogo.svg";
import loginstyles from "../assets/styles/onboarding/login.module.scss"
import loginImage from "../assets/images/loginImage.png"
import BaseInput from "../components/base/BaseInput.tsx";
import BaseButton from "../components/base/BaseButton.tsx"
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export interface CompProps {
    onLoggedIn: MouseEvent
}

export default function Login()  {
    const navigator = useNavigate()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const loginUser = () => {
        navigator("/dashboard/users")
    }
    return (
        <div className={loginstyles.body}>
            <Logo />

            <div className={loginstyles.flexwrapper}>
                <div className={loginstyles.imgWrapperChild}>
                    <img src={loginImage} alt="Login Logo" className={loginstyles.wrapperImage} />
                </div>

                <div className={loginstyles.formWrapperChild}>
                    <div className={loginstyles.headWrapper}>
                        <p className={loginstyles.welcomeHeader}>Welcome!</p>
                        <p className={loginstyles.welcomeHeaderMin}>Enter details to login.</p>
                    </div>

                    <div className={loginstyles.baseInputWrapper}>
                        <div className={loginstyles.baseInput}>
                            <BaseInput type="email" name="email" width={matches ? '100%' : '425px' } placeholder="Email" />
                        </div>

                        <div className={loginstyles.baseInput}>
                            <BaseInput type="password" name="email" width={matches ? '100%' : '425px' } placeholder="Password" />
                        </div>
                    </div>
                    

                    <p className={loginstyles.forgotpass}>FORGOT PASSWORD?</p>

                    <div className={loginstyles.baseButtonWrapper}>
                        <BaseButton onClick={loginUser} width={matches ? '100%' : '425px' } bgColor="#39CDCC" text="LOG IN" color="white" />
                    </div>
                    

                </div>
            </div>
        </div>
    );
}