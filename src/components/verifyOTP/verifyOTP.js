import React, { useState } from 'react';
import styles from './verifyOTP.module.css';

import axios from 'axios';
import { Link } from 'react-router-dom';

const VerifyOTP = () => {

    const [user, setUser] = useState({
        mobile: "",
        otp: ""
    });

    const verify = async (username) => {
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
                <h1>Enter your OTP</h1>
                <div className={styles.input_main}>
                    {/* Switch button for email or mobile number */}
                    <p>OTP has been sent via SMS to your <br />
                        registered mobile number +91 9*******123</p>
                    {/* Input fields */}
                    <div className={styles.inputs}>

                        <div>
                            {/* Email input */}

                            <input type="number" placeholder="Enter Your OTP" />
                        </div>

                    </div>
                    {/* Action buttons */}
                    <div className={styles.action_button}>
                        {/* Sign in button */}
                        <div className={styles.submit}>
                            <button>Verify</button>
                        </div>
                        {/* Login options */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTP;
