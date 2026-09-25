import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/redux/userSlice";

const NavBar = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try{
            await axios.post(BASE_URL+'/auth/logout',{}, {withCredentials: true});
            dispatch(removeUser());
        } catch(err) {
            console.log(err.response?.status);
        }
    }

    return (
        <>
            <div className="navbar bg-pink-100 shadow-sm">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">TechDate!</Link>
                </div>
                { user &&   <div className="flex gap-2">
                        <p>Welcome, {user.firstName} {user.lastName}</p>
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photo} />
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                            <Link to="/profile">Profile <span className="badge">New</span></Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                        </div>
                    </div>}
            </div>
        </>
    );
}

export default NavBar;