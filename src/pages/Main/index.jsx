import React, {useEffect, useState} from 'react';
import PostsList from "../../components/Posts/PostsList";
import Search from "../../components/UI/Search";
import Select from "../../components/UI/Select";
import MyPagination from "../../components/UI/MyPagination";
import {asyncSetCurrentPage, asyncSetPosts, searchPosts, sortPosts} from "../../store/actions/posts/posts.actions";
import {useDispatch, useSelector} from "react-redux";
import {getPageCount} from "../../utils/pages";

const MainPage = () => {
    const dispatch = useDispatch()
    const postData = useSelector(state => state.postsReducer)
    const page = useSelector(state => state.postsReducer.currentPage)
    const limit = useSelector(state => state.postsReducer.perpPage)
    const totalCount = useSelector(state => state.postsReducer.x_total_count)
    const pagesCount = getPageCount(totalCount, limit)
    const [value, setValue] = useState('');

    useEffect(() => {
        dispatch(asyncSetPosts(limit, page))
    }, [page, dispatch, limit])

    const handleClick = (value) => {
        dispatch(asyncSetCurrentPage(value))
    }

    const handleSort = () => {
        dispatch(sortPosts())
    }

    const handleSearch = () => {
        if (value === '') {
            dispatch(asyncSetPosts(limit, page))
        } else {
            dispatch(searchPosts(value, postData.posts))
        }
    }

    return (
        <div>
            <Search value={value} setValue={setValue} onClick={handleSearch}/>
            <Select
                onClick={handleSort}
            />
            { postData.posts.length ? <PostsList postData={postData}/> : <h1 className='text-center'>Посты не найдены</h1>}
            <MyPagination
                pagesCount={pagesCount}
                onclick={handleClick}
                page={page}
            />
        </div>
    );
};

export default MainPage;