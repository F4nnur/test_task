import React from 'react';
import PostsList from "../../components/Posts/PostsList";
import Search from "../../components/UI/Search";
import Select from "../../components/UI/Select";

const MainPage = () => {
    return (
        <div>
            <Search/>
            <Select/>
            <PostsList/>
        </div>
    );
};

export default MainPage;