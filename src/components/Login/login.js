import React, { useState } from 'react';
import styles from './login.module.css';
import { ReactComponent as Facebook } from '../../Assets/Icons/facebook.svg';
import { ReactComponent as Google } from '../../Assets/Icons/google.svg';
import { ReactComponent as Apple } from '../../Assets/Icons/apple.svg';

const Login = () => {
    const [switchBtn, setSwitchBtn] = useState(1);

    return (
        <div className={styles.register_container}>
            <div className={styles.register_box_main}>
                {/* Main heading */}
                <h1>Hi, Welcome Back</h1>
                <div className={styles.input_main}>
                    {/* Switch button for email or mobile number */}
                    <div className={styles.switch_btn}>
                        <button className={switchBtn === 1 ? styles.active : styles.inactive} onClick={() => setSwitchBtn(1)}>E-Mail</button>
                        <button className={switchBtn === 2 ? styles.active : styles.inactive} onClick={() => setSwitchBtn(2)}>Mobile Number</button>
                    </div>
                    {/* Input fields */}
                    <div className={styles.inputs}>
                        {switchBtn === 1 ? (
                            <div>
                                {/* Email input */}
                                <p>Enter your email address</p>
                                <input type="text" placeholder="Enter Your Email" />
                            </div>
                        ) : (
                            <div>
                                {/* Phone input */}
                                <p>Enter your phone number</p>
                                <input type="text" placeholder="Enter Your Phone" />
                            </div>
                        )}
                        {/* Password input */}
                        <div>
                            <p>Enter your password</p>
                            <input type="password" placeholder="Enter Your Password" />
                        </div>
                        {/* Forgot password link */}
                        <h6>Forgot password?</h6>
                    </div>
                    {/* Action buttons */}
                    <div className={styles.action_button}>
                        {/* Sign in button */}
                        <div className={styles.submit}>
                            <button>Sign In</button>
                        </div>
                        {/* Login options */}
                        <div className={styles.login_options}>
                            <span>
                                <p>New Here ?</p>
                                {/* Sign up link */}
                                <h5>Sign Up</h5>
                            </span>
                            {/* Social media login buttons */}
                            <div className={styles.btn_group}>
                                <span><Facebook /></span>
                                <span><Google /></span>
                                <span><Apple /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
