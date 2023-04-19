import { ReactComponent as Logo } from "../assets/svgs/lendsqrLogo.svg";
import loginstyles from "../assets/styles/onboarding/login.module.scss"
import loginImage from "../assets/images/loginImage.png"
import BaseInput from "../components/base/BaseInput";
import BaseButton from "../components/base/BaseButton"
import React from "react";

export interface CompProps {
    onLoggedIn: MouseEvent
}

export default function Login()  {
    return (
        <div className={loginstyles.body}>
            <Logo />

            <div className={loginstyles.flexwrapper}>
                <div className={loginstyles.imgWrapperChild}>
                    <img src={loginImage} alt="Login Logo" className={loginstyles.wrapperImage} />
                </div>

                <div className={loginstyles.formWrapperChild}>
                    <div>
                        <p className={loginstyles.welcomeHeader}>Welcome!</p>
                        <p className={loginstyles.welcomeHeaderMin}>Enter details to login.</p>
                    </div>

                    <div className={loginstyles.baseInputWrapper}>
                        <div className={loginstyles.baseInput}>
                            <BaseInput type="email" name="email" placeholder="Email" />
                        </div>

                        <div className={loginstyles.baseInput}>
                            <BaseInput type="password" name="email" placeholder="Password" />
                        </div>
                    </div>
                    

                    <p className={loginstyles.forgotpass}>FORGOT PASSWORD?</p>

                    <div className={loginstyles.baseButtonWrapper}>
                        <BaseButton width="425px" bgColor="#39CDCC" text="LOG IN" color="white" />
                    </div>
                    

                </div>
            </div>
        </div>
    );
}