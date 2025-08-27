import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";

const LoginPage = ({onLogin}) => {
    const [userName, setUsername] = useState("");
    const [passWord, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
}