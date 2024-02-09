import React, { useState, useEffect } from 'react'
import styles from './signInModal.module.css'
import phone from '../../Assets/Images/phone.png'
import { Link } from 'react-router-dom';
import { ReactComponent as Google } from '../../Assets/Icons/google.svg';
import { ReactComponent as Apple } from '../../Assets/Icons/apple.svg';
import { ReactComponent as Facebook } from '../../Assets/Icons/facebook.svg';
import { ReactComponent as Cross } from '../../Assets/Icons/cross.svg';


const SignINModal = ({ setOpen }) => {
    const [switchBtn, setSwitchBtn] = useState(1);
    const [user, setUser] = useState({

        username: "",

        mobileNumber: "",
        email: "",
        password: ""

    });
    const handleCross = () => {
        console.log('first')
        localStorage.setItem('isShowLogin', false)
        console.log(localStorage.getItem('isShowLogin'));
        setOpen(false)
    }

    return (
        <>
            <div className={styles.model_main}>
                <div className={styles.main_image}>
                    <img src={phone} alt="no img found" />
                </div>
                <div className={styles.cross} onClick={handleCross}>
                    <Cross />
                </div>

                <div className={styles.register_box_main}>

                    {/* Main heading */}
                    <h1>Login your account !</h1>
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
                                    {/* <p>Enter your email address</p> */}
                                    <input type="text" placeholder="Enter Your Email" />
                                </div>
                            ) : (
                                <div>
                                    {/* Phone input */}
                                    {/* <p>Enter your phone number</p> */}
                                    <input type="text" placeholder="Enter Your Phone" />
                                </div>
                            )}
                            {/* Password input */}
                            <div>
                                {/* <p>Enter your password</p> */}
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
                                    <Link to={'/register'}><h5>Sign Up</h5></Link>
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

        </>
    )
}

export default SignINModal