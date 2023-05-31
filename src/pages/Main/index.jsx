import React, {useEffect} from 'react';
import PostsList from "../../components/Posts/PostsList";
import Search from "../../components/UI/Search";
import Select from "../../components/UI/Select";
import MyPagination from "../../components/UI/MyPagination";
import {asyncSetCurrentPage, asyncSetPosts} from "../../store/actions/posts/posts.actions";
import {useDispatch, useSelector} from "react-redux";
import {getPageCount} from "../../utils/pages";

const MainPage = () => {
    const dispatch = useDispatch()
    const postData = useSelector(state => state.postsReducer)
    const page = useSelector(state => state.postsReducer.currentPage)
    const limit = useSelector(state => state.postsReducer.perpPage)
    const totalCount = useSelector(state => state.postsReducer.x_total_count)
    const pagesCount = getPageCount(totalCount, limit)

    useEffect(() => {
        dispatch(asyncSetPosts(limit, page))
    }, [page, dispatch, limit])

    const handleClick = (value) => {
        dispatch(asyncSetCurrentPage(value))
    }

    return (
        <div>
            <Search/>
            <Select/>
            <PostsList postData={postData}/>
            <MyPagination
                pagesCount={pagesCount}
                onclick={handleClick}
                page={page}
            />
        </div>
    );
};

export default MainPage;