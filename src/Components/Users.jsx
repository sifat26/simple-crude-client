import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const users = () => {
    const loadedUsers=useLoaderData()
    const [users,setUsers]=useState(loadedUsers)
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
                const remaining=users.filter(user=>user._id!==_id)
                setUsers(remaining)
    
        }})

    }
    return (
        <div>
            <h1>Number of users: {users.length}</h1>
            <div>
                {
                    users.map(user=>
                        <p key={user._id}>
                            {user.name} : {user.email} <button onClick={()=>handleDelet(user._id)}>X</button>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default users;