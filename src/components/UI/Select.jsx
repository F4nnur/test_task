import React from 'react';
import {Dropdown} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {sortPosts} from "../../store/actions/posts/posts.actions";

const Select = () => {
    const dispatch = useDispatch()
    return (
        <Dropdown className='m-3'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Сортировка
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => dispatch(sortPosts())}>По заголовку</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Select;