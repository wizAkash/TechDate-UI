import { useSelector } from "react-redux";

const Feed = () => {
    const user = useSelector((state) => state.user);
    return (
        <>
            <h1>Welcome, on board! {user.firstName}</h1>
        </>
    );
}

export default Feed;