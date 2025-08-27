import React from "react";
import {useNavigate} from "react-router-dom";
//import "../styles/LandingPage.css";

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className = "landing-container">
            <div className="header-container">
                <h1 className="title">Point Loyalty</h1>
            </div>
            <div className="body">
                <h3 className="button-heading">Login to your account</h3>
                <button className="login-button" onClick={() => navigate("/Login")}>Login</button>
                <h3 className="button-heading">Get Started</h3>
                <button className="signup-button" onClick={() => navigate("/SignUp")}>Sign Up</button>
            </div>
        </div>
    );
}

export default LandingPage;