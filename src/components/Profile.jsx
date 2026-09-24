import { useSelector } from "react-redux";


const Profile = () => {
    const user = useSelector((store) => store.user);

    return (
        <>
            <h1>Hi {user.firstName} {user.lastName}. This is your profile page, you can edit your details in here.</h1>
        </>
    );
}

export default Profile;