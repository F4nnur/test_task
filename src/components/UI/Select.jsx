import React from 'react';
import {Dropdown} from "react-bootstrap";

const Select = () => {
    return (
        <Dropdown className='m-3'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Сортировка
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Select;