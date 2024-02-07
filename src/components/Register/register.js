import React from 'react';
import styles from './register.module.css';
import { ReactComponent as User } from '../../Assets/Icons/userRegister.svg';
import { ReactComponent as Email } from '../../Assets/Icons/email.svg';
import { ReactComponent as Phone } from '../../Assets/Icons/phone.svg';
import { ReactComponent as Lock } from '../../Assets/Icons/lock.svg';
import { ReactComponent as Facebook } from '../../Assets/Icons/facebook.svg';
import { ReactComponent as Google } from '../../Assets/Icons/google.svg';
import { ReactComponent as Apple } from '../../Assets/Icons/apple.svg';

const Register = () => {
    return (
        <div className={styles.register_container}>
            <div className={styles.register_box_main}>
                {/* Main heading */}
                <h1>Create Your Account</h1>
                <div className={styles.input_main}>
                    {/* Section for entering details */}
                    <h3>Enter Your Details</h3>
                    <span className={styles.inputs}>
                        {/* Username input */}
                        <span>
                            <User />
                            <input type="text" placeholder='Enter Your Username' />
                        </span>
                        {/* Email input */}
                        <span>
                            <Email />
                            <input type="text" placeholder='Enter Your Email' />
                        </span>
                        {/* Phone input */}
                        <span>
                            <Phone />
                            <input type="text" placeholder='Enter Your Phone' />
                        </span>
                        {/* Password input */}
                        <span>
                            <Lock />
                            <input type="text" placeholder='Enter Your Password' />
                        </span>
                    </span>
                    {/* Action buttons */}
                    <div className={styles.action_button}>
                        {/* Sign up button */}
                        <div className={styles.submit}>
                            <button>Sign Up</button>
                        </div>
                        {/* Login options */}
                        <div className={styles.login_options}>
                            <p>sign in With</p>
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
}

export default Register;
