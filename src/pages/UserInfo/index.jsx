import React, {useEffect} from 'react';
import UserCard from "../../components/User/Card";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {asyncFetchUserData, asyncFetchUserPosts} from "../../store/actions/User/user.actions";
import s from "../../components/Posts/styles.module.css";
import {InfinitySpin} from "react-loader-spinner";
import PostsList from "../../components/Posts/PostsList";

const UserInfoPage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const userState = useSelector(state => state.userInfoReducer)
    const user = useSelector(state => state.userInfoReducer.data)
    const userPosts = useSelector(state => state.userPostsReducer.posts)
    const userPostsData = useSelector(state => state.userPostsReducer)

    useEffect(() => {
        dispatch(asyncFetchUserData(params.id))
        dispatch(asyncFetchUserPosts(params.id))
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
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center'
        }}>
            <UserCard userData={user}/>
            <PostsList posts={userPosts} postData={userPostsData}/>
        </div>
    );
};

export default UserInfoPage;