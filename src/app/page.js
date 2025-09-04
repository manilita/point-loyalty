// import Image from "next/image";
// import styles from "./page.module.css";
'use client';
//import React, { useEffect, useState } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import LandingPage from "./pages/LandingPage";
//import Login from "./pages/Login";
//import Dashboard from "./pages/Dashboard";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter();

  return (
    <div className="home-container">
      <h1>Point Loyalty</h1>
      <p>Log in</p>
      <button onClick={() => router.push("/login")}>Log in</button>
    </div>
  );
}
