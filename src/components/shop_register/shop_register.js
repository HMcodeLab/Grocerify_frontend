import React, { useState } from 'react'
import styles from './shop_register.module.css';
import registerimage from '../../Assets/Images/registration.png'
import Checkbox from '../Custom/checkbox';

const ShopRegistration = () => {

    const [user, setuser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        mobile: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuser({
            ...user,
            [name]: value,
        });
    };

    return (
        <div className={styles.shop_register_main}>
            <div className={styles.bg_image}>
                <img src={registerimage} alt="not found" />

            </div>
            <div className={styles.form_main}>
                <div className={styles.form_top}>
                    <h2>SHOP REGISTRATION FORM</h2>
                </div>
                <div className={styles.scrollable_form}>
                    <span className={styles.inputs}>
                        <div>
                            <span>
                                <p>Shop Name</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Owner/Manager Name</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Owner/Manager Contact Number</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Owner/manager Email Address</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>

                            <span>
                                <p>Owner/manager Physical Address</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                        </div>
                        <div>
                            <h4> Business Registration Form </h4>

                            <span>
                                <p>Business Licence/Permit Number</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Business Registration Number</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Tax Identification Number</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                        </div>
                        <div>
                            <h4>Product Information </h4>
                            <span>
                                <p>Types OF Product Sold</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Opening Hours</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Working Days</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                        </div>
                        <div className={styles.deliery_info}>
                            <p>Delivery Information(If Applicable)</p>
                            <div className={styles.checkbox_div}>
                                <span style={{ position: "relative" }}>

                                    <Checkbox value={"Monday"} />
                                </span>
                                <span style={{ position: "relative" }}>

                                    <Checkbox value={"Tuesday"} />
                                </span>
                                <span style={{ position: "relative" }}>

                                    <Checkbox value={"Wednesday"} />
                                </span>
                                <span style={{ position: "relative" }}>

                                    <Checkbox value={"Thursday"} />
                                </span>
                                <span style={{ position: "relative" }}>

                                    <Checkbox value={"Friday"} />
                                </span>
                                <span style={{ position: "relative" }}>

                                    <Checkbox value={"Saturday"} />
                                </span>
                                <span style={{ position: "relative" }}>

                                    <Checkbox value={"Sunday"} />
                                </span>
                            </div>
                        </div>
                        <div className={styles.delivery_service}>
                            <p>Do you provide delivery services</p>

                            <div className={styles.d_service}>
                                <span>
                                    <input type="radio" name="" id="" />
                                    <p>Yes</p>
                                </span>
                                <span>
                                    <input type="radio" name="" id="" />
                                    <p>No</p>
                                </span>
                            </div>
                        </div>
                        <span>
                            <p>Delivery Areas</p>
                            <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                        </span>

                        <span>
                            <p>Delivery Charges</p>
                            <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                        </span>
                        <div className={styles.payment_method}>
                            <p>Payment Methods Accepted</p>
                            <span style={{ position: "relative" }}>

                                <Checkbox value={"Cash"} />
                            </span>
                            <span style={{ position: "relative" }}>

                                <Checkbox value={"Online Payment"} />
                            </span>
                            <span style={{ position: "relative" }}>

                                <Checkbox value={"Credit/Debit Card"} />
                            </span>
                        </div>

                        <div>
                            <span>
                                <p>Shop Logo or Image Option (Upload Option)</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Shop Name</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Owner/Manager Name</p>
                                <input type="text" name='firstName' value={user.firstName} onChange={handleChange} />
                            </span>

                        </div>

                        <span>

                            <span>
                                <p>Terms and Condition</p>
                                <textarea type="text" name='firstName' rows={5} cols={50} value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Privacy Policy</p>
                                <textarea type="text" name='firstName' rows={5} cols={50} value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Refund Policy</p>
                                <textarea type="text" name='firstName' rows={5} cols={50} value={user.firstName} onChange={handleChange} />
                            </span>
                            <span>
                                <p>Return Policy</p>
                                <textarea type="text" name='firstName' rows={5} cols={50} value={user.firstName} onChange={handleChange} />
                            </span>
                        </span>

                    </span>
                    <div className={styles.submit}>
                        <button>Submit</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ShopRegistration