import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from '../Dashboard/UserRow';

const AllUsers = () => {

    // useState o use korte paro useEffect er shathe useQuery er bodla 
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

   
    return (
        <div>

            <h2>{users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =><UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                            >
                            </UserRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;