import React, { useState } from 'react';
import styles from './login.module.css';
import { ReactComponent as Facebook } from '../../Assets/Icons/facebook.svg';
import { ReactComponent as Google } from '../../Assets/Icons/google.svg';
import { ReactComponent as Apple } from '../../Assets/Icons/apple.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [switchBtn, setSwitchBtn] = useState(1);
    const [user, setUser] = useState({

        username: "",

        mobileNumber: "",
        email: "",
        password: ""

    });

    const generateOTP = async (username) => {
        try {
            const { data: { code }, status } = await axios.get('http://192.168.0.153:8080/api/generateOTP', { params: { username } });


            // send mail with the OTP
            if (status === 201) {
                let text = `Your Password OTP is ${code}. Verify and recover your password.`;
                await axios.post('/api/registerMail', { username, userEmail: username, text, subject: "Password OTP" })
            }
            return Promise.resolve(code);
        } catch (error) {
            return Promise.reject({ error });
        }
    }



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
                                <Link to={'/register'}>  <h5>Sign Up</h5></Link>
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
