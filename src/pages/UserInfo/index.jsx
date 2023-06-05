import React, {useEffect} from 'react';
import UserCard from "../../components/User/Card";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {asyncFetchUserData} from "../../store/actions/User/user.actions";
import s from "../../components/Posts/styles.module.css";
import {InfinitySpin} from "react-loader-spinner";

const UserInfoPage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const userState = useSelector(state => state.userInfoReducer)
    const user = useSelector(state => state.userInfoReducer.data)
    console.log(user)

    useEffect(() => {
        dispatch(asyncFetchUserData(params.id))
    }, [params.id, dispatch])

    if (userState.isLoading) {
        return <div className={s.loader} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <InfinitySpin width='200' color='#6A5ACD'/>
        </div>
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <UserCard userData={user}/>
        </div>
    );
};

export default UserInfoPage;