import { useLoaderData } from "react-router-dom";

const Users = () => {
    const Users=useLoaderData()
    console.log(Users);
    return (
        <div>
            <h1>Number of Users: {Users.length}</h1>
            <div>
                {
                    Users.map(user=>
                        <p key={user._id}>
                            {user.name} : {user.email}
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Users;