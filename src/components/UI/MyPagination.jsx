import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


const MyPagination = ({pagesCount, onclick, page}) => {
    const pages = []
    for (let i = 0; i < pagesCount ; i++) {
        pages.push(i + 1)
    }
    const handleClick = (item) => {
        onclick(item)
    }
    return (
        <>
            <div style={{display: 'flex' ,marginTop:'9%', alignItems: "center", justifyContent: 'center'}}>
                {pages.map(item =>
                    <Pagination onClick={() => handleClick(item)}>
                        <Pagination.Item active={item === page}>
                            {item}
                        </Pagination.Item>
                    </Pagination>
                )}
            </div>
        </>
    );
};

export default MyPagination;