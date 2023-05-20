import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPosts} from "../../store/actions/posts/posts.actions";

const PostsList = () => {
    const postData = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()
    console.log(postData)
    useEffect(() => {
        dispatch(setPosts())
    },[])
    return (
        <div>
            <button>Получить посты</button>
        </div>
    );
};

export default PostsList;