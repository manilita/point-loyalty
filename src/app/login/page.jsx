'use client';
import React from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
//import axios from "axios";

function Login() {
    const router = useRouter();
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

                <button className="login-button" type="submit" /*disabled={loading} */ onClick={() => router.push("/dashboard")}>Log In</button>
            </form>

            <p className="signup-text">
                Don't have an account?{" "}
                <Link href="/signup" className="signup-link">Sign up!</Link>
            </p>
        </div>
    );

}

export default Login;