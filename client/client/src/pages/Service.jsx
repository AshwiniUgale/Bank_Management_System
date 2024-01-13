import React from 'react';
//import { useHistory } from "react-router-dom";
export const Service = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best Bank</p>
              <h1>Welcome to Candid Bank</h1>
              <p>
              Register In Bank..
              </p>
              <div className="btn btn-group">
                <a href="/CustomerInfo">
                  <button className="btn">Register now..
                  </button>
                </a>
                <a href="/AddMoney">
                  <button className="btn secondary-btn">Validate Yourself..</button>
                </a>
              </div>
              <p>👆Please Fill Bank Account Registration Form To Avail Our Services..</p>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="./public/images/customer.jpg"
                alt="coding together"
                width="450"
                height="540"
              />
            </div>
          </div>
        </section>
      </main>

    

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="./public/images/check.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Check Balance..</h1>
            <p>
             You Can View Your Balance Here..
            </p>
            <div className="btn btn-group">
              <a href="/ViewBalance">
                <button className="btn">View Balance..</button>
              </a>
              <a href="/InsertMoney">
                <button className="btn secondary-btn">Deposit Money..</button>
              </a>
              <div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};