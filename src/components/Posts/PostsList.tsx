import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setPosts} from "../../store/actions/posts/posts.actions";

const PostsList: React.FC = () => {
    const {posts, error, isLoading} = useTypedSelector(state => state.postsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPosts())
    })
    return (
        <div>
            <button>Получить посты</button>
            {
                posts.map(item =>
                    <div>
                        {item.title}
                        {item.body}
                    </div>
                )
            }
        </div>
    );
};

export default PostsList;