import React, { useState } from 'react';
import styles from './register.module.css';
import { ReactComponent as User } from '../../Assets/Icons/userRegister.svg';
import { ReactComponent as Email } from '../../Assets/Icons/email.svg';
import { ReactComponent as Phone } from '../../Assets/Icons/phone.svg';
import { ReactComponent as Lock } from '../../Assets/Icons/lock.svg';
import { ReactComponent as Facebook } from '../../Assets/Icons/facebook.svg';
import { ReactComponent as Google } from '../../Assets/Icons/google.svg';
import { ReactComponent as Apple } from '../../Assets/Icons/apple.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL_PRODUCTS, BASE_URL_USER } from '../../Api/api';

const Register = () => {
    const navigate = useNavigate();
    const [user, setuser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        mobile: "",
        password: "",
    })

    const handleRegister = async () => {
        // console.log('called')
        try {
            const res = await axios.post(`${BASE_URL_PRODUCTS}api/generateMobileOTP`, { mobile: Number(user.mobile) });
            console.log(res);
            if (res.status === 201) {
                navigate('/verify_otp')
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setuser({
            ...user,
            [name]: value,
        });
    };

    console.log(user)


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
                            <input type="text" placeholder='Enter Your First Name' name='firstName' value={user.firstName} onChange={handleChange} />
                        </span>
                        {/* Email input */}
                        <span>
                            <User />
                            <input type="text" placeholder='Enter Your Last Name' name='lastName' value={user.lastName} onChange={handleChange} />
                        </span>
                        <span>
                            <Email />
                            <input type="text" placeholder='Enter Your Email' name='username' value={user.username} onChange={handleChange} />
                        </span>
                        {/* Phone input */}
                        <span>
                            <Phone />
                            <input type="text" placeholder='Enter Your Phone' name='mobile' value={user.mobile} onChange={handleChange} />
                        </span>
                        {/* Password input */}
                        <span>
                            <Lock />
                            <input type="password" placeholder='Enter Your Password' name='password' value={user.password} onChange={handleChange} />
                        </span>
                    </span>
                    {/* Action buttons */}
                    <div className={styles.action_button}>
                        {/* Sign up button */}
                        <div className={styles.submit} onClick={handleRegister}>
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
