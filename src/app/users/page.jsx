import UserCard from '@/components/UserCard';
import Link from 'next/link';
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
        <div className='space-y-7'>
           <h2 className=''>Users: {users.length}</h2> 
         <Link className='btn bg-purple-500 p-2 mb-4 rounded-xl ' href={'/users/new'}>Add Users</Link>
           <div className="grid md:grid-cols-3 gap-4 items-center">
            {
                users.map(user => <UserCard key={user.id} user ={user}></UserCard>)
            }
           </div>
        </div>
    );
};

export default UsersPage;