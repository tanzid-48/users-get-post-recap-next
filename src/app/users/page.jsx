import UserCard from '@/components/UserCard';
import React from 'react';

const GetUsersData = async() =>{
   const res = await fetch('http://localhost:5000/users', {
  cache: "no-store",
});
return res.json();
}



const UsersPage = async() => {
    const users = await GetUsersData();
  
    return (
        <div>
           <h2>Users: {users.length}</h2> 
           <div className="grid md:grid-cols-3 gap-4 items-center">
            {
                users.map(user => <UserCard key={user.id} user ={user}></UserCard>)
            }
           </div>
        </div>
    );
};

export default UsersPage;