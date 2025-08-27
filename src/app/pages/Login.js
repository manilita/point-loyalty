import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
//import axios from "axios";

const Login = ({onLogin}) => {
    const [userName, setUsername] = useState("");
    const [passWord, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
}

export default Login;