import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user) return;

        const fetchUser = async () => {
            try {
                const res = await axios.get(BASE_URL + '/profile', {
                    withCredentials: true
                });
                dispatch(addUser(res.data));
            } catch (error) {
                const status = error.response?.status;

                if (status === 400 || status === 401 || status === 403) {
                    navigate('/login');
                    return;
                }

                console.error(error);
            }
        };

        fetchUser();
    }, [dispatch, navigate, user]);

    return (
        <>
            <NavBar/>
            {user ? <Outlet/> : <p>Loading...</p>}
        </>
    );
}

export default Body;