import React from 'react';
import {Dropdown} from "react-bootstrap";

const Select = ({onClick}) => {
    const handleSort = () => {
        onClick()
    }
    return (
        <Dropdown className='m-3'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Сортировка
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleSort}>По заголовку</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Select;