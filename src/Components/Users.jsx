import { useLoaderData } from "react-router-dom";

const Users = () => {
    const handleDelet=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,
    {
        method:"DELETE"
    })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                alert("User deleted successfully");
    
        }})

    }
    const Users=useLoaderData()
    console.log(Users);
    return (
        <div>
            <h1>Number of Users: {Users.length}</h1>
            <div>
                {
                    Users.map(user=>
                        <p key={user._id}>
                            {user.name} : {user.email} <button onClick={()=>handleDelet(user._id)}>X</button>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Users;