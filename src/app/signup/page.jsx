'use client';
import {useRouter} from "next/navigation";
import Link from "next/link";
import React from "react";

function Signup() {
    const router = useRouter();
    return (
        <div className="login-container">
            <h3 className="login-title">Log In</h3>
            <form /*onSubmit={handleLogin}*/>
                <div className="input-container">
                    <input 
                        type="text"
                        className="business-name"
                        placeholder="Name of your business"
                        //value={email}
                        //onChange={(e) => setEmail(e.target.value)}
                        //required
                    />
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

                <button className="login-button" type="submit" /*disabled={loading} */ onClick={() => router.push("/dashboard")}>Sign up</button>
            </form>

            <p className="signup-text">
                Already have an account? Log in!{" "}
                <Link href="/login" className="login-link">Log in!</Link>
            </p>
        </div>
    );
}

export default Signup;