//'use client';
import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
//import axios from "axios";

const Login = (/*{onLogin}*/) => {
    const navigate = useNavigate();
    /*
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("https://68adf3c2a0b85b2f2cf52b07.mockapi.io/api/ptloyal/", { email, password}, {withCredentials: true});

            const result = await response.data;

            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(result));
                onLogin && onLogin(result);
                navigate("/Dashboard");
            }
            else {
                alert(result.error || "Incorrect email or password.");
            }
        }
        catch (error) {
            console.error("Login error: ", error);
            alert("An error occured. Please try again later.");
        }
        setLoading(false);
    };
*/
    return (
        <div className="login-container">
            <h3 className="login-title">Log In</h3>
            <form /*onSubmit={handleLogin}*/>
                <div className="input-container">
                    <input 
                        type="email"
                        className="email"
                        placeholder="email"
                        //value={email}
                        //onChange={(e) => setEmail(e.target.value)}
                        //required
                    />
                    <input 
                        type="password"
                        className="password"
                        placeholder="password"
                        //value={password}
                        //onChange={(e) => setPassword(e.target.value)}
                        //required
                    />
                </div>

                <button className="login-button" type="submit" /*disabled={loading} */ onClick={() => navigate("/Dashboard")}>Log In</button>
            </form>

            <p className="signup-text">
                Don't have an account?{" "}
                <Link to="/Signup" className="signup-link">Sign up!</Link>
            </p>
        </div>
    );

}

export default Login;