import React from 'react';
import {Form} from "react-bootstrap";
const Search = ({value, setValue, onCh}) => {
    const handleSearch = (e) => {
        setValue(e.target.value)
        onCh()
    }

    return (
        <Form className='d-flex mt-5 p-3'>
            <Form.Control
                value={value}
                type="search"
                placeholder="Поиск"
                className="me-2"
                aria-label="Search"
                onChange={(e) => handleSearch(e)}
            />
        </Form>
    );
};

export default Search;