import React from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Search = () => {
    return (
        <Form className='d-flex mt-5 p-3'>
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    );
};

export default Search;