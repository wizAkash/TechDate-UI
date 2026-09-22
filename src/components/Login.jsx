import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [email, setEmail] = useState("zlatan@ibrahmovic.com");
    const [password, setPassword] = useState("Zlatan@123");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async() => {
        try{
            const res = await axios.post(
                BASE_URL+ "/auth/login", 
                {email,password}, 
                {withCredentials: true}
            );
            dispatch(addUser(res.data));
            navigate('/');
            console.log(res.data);
        } catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <div className="flex justify-center my-15">
                <div className="card bg-base-300 w-96 shadow-sm">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Login to find you Tech Date!</h2>
                        <div>
                            <fieldset className="fieldset">
                                <label className="label" htmlFor="name">Email</label>
                                <input type="text" id="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label" htmlFor="name">Password</label>
                                <input type="text" id="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </fieldset>
                        </div>
                        <div className="card-actions">
                        <button className="btn btn-primary" onClick={handleLogin}>Login!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;