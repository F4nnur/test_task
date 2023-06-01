import React from 'react';
import UserCard from "../../components/User/Card";

const UserInfoPage = ({user}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'start', marginTop: '100px'}}>
            <UserCard/>
        </div>
    );
};

export default UserInfoPage;