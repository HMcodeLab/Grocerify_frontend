import React from "react";
import "./YourAccount.css";

const YourAccount = () => {
  return (
    <div className="main-div">
      <h1 className="heading">YOUR ACCOUNT</h1>
      <div className="cards">
        <div className="cd">
          <div className="image">
            <img
              src="../assests/icons/arcticons_parcel-tracker.svg"
              alt="Order"
            />
          </div>
          <div className="cd-body">
            <h5 className="cd-title">Your Order</h5>
            <p className="cd-text">Track, return or buy</p>
          </div>
        </div>
        <div className="cd">
          <div className="image">
            <img
              src="../assests/icons/material-symbols-light_shield-locked-outline.svg"
              alt="Order"
            />
          </div>
          <div className="cd-body">
            <h5 className="cd-title">Login & Security</h5>
            <p className="cd-text">Edit login, name & mobile number</p>
          </div>
        </div>
        <div className="cd">
          <div className="image">
            <img
              src="../assests/icons/fluent_location-28-regular.svg"
              alt="Order"
            />
          </div>
          <div className="cd-body">
            <h5 className="cd-title">Your Addresses</h5>
            <p className="cd-text">Edit addresses for order and gifts</p>
          </div>
        </div>
        <div className="cd">
          <div className="image">
            <img src="../assests/icons/contact.svg" alt="Order" />
          </div>
          <div className="cd-body">
            <h5 className="cd-title">Contact Us</h5>
            <p className="cd-text"></p>
          </div>
        </div>
        <div className="cd">
          <div className="image">
            <img src="../assests/icons/Mask group.svg" alt="Order" />
          </div>
          <div className="cd-body">
            <h5 className="cd-title">Payment option</h5>
            <p className="cd-text">Edit or add payment methods</p>
          </div>
        </div>
        <div className="cd">
          <div className="image">
            <img src="../assests/icons/ph_gift.svg" alt="Order" />
          </div>
          <div className="cd-body">
            <h5 className="cd-title">COUPON</h5>
            <p className="cd-text"></p>
          </div>
        </div>
        <div className="cd" style={{ border: "2px dashed #d9d9d9" }}>
          <div className="image">
            <img src="../assests/icons/addstore.svg" alt="Order" />
          </div>
          <div className="cd-body">
            <h5 className="cd-title">Add Your store</h5>
            <p className="cd-text">Become a seller</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourAccount;
