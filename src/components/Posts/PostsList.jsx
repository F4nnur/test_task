import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncSetPosts} from "../../store/actions/posts/posts.actions";

const PostsList = () => {
    const postData = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncSetPosts())
    }, dispatch)

    if (postData.isLoading){
        return <h1>Loading</h1>
    }
    return (
        <div>
            {
                postData.posts.map(item =>
                    <div>
                        <h1>{item.title}</h1>
                        <h1>{item.body}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default PostsList;