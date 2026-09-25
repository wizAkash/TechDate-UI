import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import UserCard from "./UserCard";
import { addFeed } from "../utils/redux/feedSlice";

const Feed = () => {
    const user = useSelector((state) => state.user);
    const feed = useSelector((state) => state.feed);
    const dispatch = useDispatch();

    const getFeed = async() => {
        if(feed) return;
        try{
            const res = await axios.get(BASE_URL+'/user/feed', {withCredentials: true});
            dispatch(addFeed(res.data.data));
            console.log("User Feed : " + res.data.data);
        } catch(err) {
            console.log(err?.response?.message);
        }
    }

    useEffect(() => {
        getFeed();
    });

    return (
        <>
            <div className="items-center justify-between flex flex-col">
                <h1>Welcome, {user.firstName} {user.lastName}</h1>
                <h2>This is your feed!</h2>
            </div>
            <div className='flex justify-center m-10'>
                {feed ? (
                    <UserCard user = {feed[0]}/>
                ) : (
                    <UserCard/>
                )}
            </div>
        </>
    );
}

export default Feed;