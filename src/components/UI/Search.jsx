import React from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
const Search = ({value, setValue, onClick}) => {
    const handleSearch = () => {
        onClick()
    }

    return (
        <Form className='d-flex mt-5 p-3'>
            <Form.Control
                value={value}
                type="search"
                placeholder="Поиск"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setValue(e.target.value)}
            />
            <Button
                variant="outline-success"
                onClick={handleSearch}
            >
                Найти
            </Button>
        </Form>
    );
};

export default Search;