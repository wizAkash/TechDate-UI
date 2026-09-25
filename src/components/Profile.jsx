import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/redux/userSlice";


const Profile = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [loading, setLoading] = useState(false);
    const photo = user.photo;
    

    const saveProfile = async () => {
        try{
            setLoading(true);
            const data = {firstName, lastName, age, gender, about};
            const res = await axios.post(BASE_URL+'/profile/edit', data, {withCredentials: true});
            dispatch(addUser(res.user));
            console.log('Res : ' + res);
        } catch(err) {
            console.log(err);
        } finally{
            setLoading(false);
        }
    }

    return (
        <>
            <div className="justify-center flex m-10 ">
                <div className="card bg-pink-100 w-96 shadow-sm mx-10 p-2 flex justify-center">
                    <h2 className="card-title">Edit your profile</h2>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <div>
                            <fieldset className="fieldset">
                                <label className="label" htmlFor="name">Firstname</label>
                                <input type="text" id="firstname" className="input" placeholder="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label" htmlFor="name">Lastname</label>
                                <input type="text" id="lastname" className="input" placeholder="Lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label" htmlFor="name">Age</label>
                                <input type="text" id="age" className="input" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label" htmlFor="gender">Gender</label>
                                <select defaultValue="Gender" className="select" value={gender}onChange={(e) => setGender(e.target.value)}>
                                    <option disabled={true}>Pick a gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>                            
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label" htmlFor="name">About</label>
                                <textarea className="textarea" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                            </fieldset>
                        </div>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary" disabled={loading} onClick={saveProfile}>{loading ? 'Loading..' : 'Save Info'}</button>
                        </div>
                    </div>
                </div>
                <UserCard user={{firstName, lastName, age, gender, about, photo}}/>
            </div>
        </>
    );
}

export default Profile;