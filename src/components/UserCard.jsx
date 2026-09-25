const UserCard = ({ user }) => {
    return (
        <div className="card bg-pink-100 w-96 shadow-sm">

            {!user ? (
                <div className="flex justify-center items-center h-96">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : (
                <>
                    <figure className="w-full h-96">
                        <img
                            src={user.photo}
                            className="w-full h-full object-cover"
                            alt="User"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title">
                            {user.firstName} {user.lastName}
                        </h2>

                        <p>{user.age}, {user.gender}</p>
                        <p>{user.about}</p>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                Ignore
                            </button>

                            <button className="btn btn-secondary">
                                Send Request
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserCard;