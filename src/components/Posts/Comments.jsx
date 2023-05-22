import React from 'react';
import Button from "react-bootstrap/Button";
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncSetComments} from "../../store/actions/comments/comments.actions";
import {Card} from "react-bootstrap";

const Comments = (props) => {
    const [itemId] = useState(props.itemId)
    const [showComments, setShowComments] = useState(false)
    const dispatch = useDispatch()
    const comments = useSelector(state => state.commentsReducer.comments)

    const toggleComments = (setsShowComments, id) => {
        const findedIndex = comments.findIndex(item => item.postId === itemId)
        if (findedIndex) {
            dispatch(asyncSetComments(id))
        }
        setShowComments(setsShowComments)
    }

    return (
        <div>
            <Button
                onvariant={"info"}
                onClick={() => toggleComments(!showComments, itemId)}
            >
                Коментарии
            </Button>
            { comments && showComments ?
                comments.map(item =>
                    <Card key={item.id}>
                        <Card.Title>{item.email}</Card.Title>
                        <Card.Body>{item.body}</Card.Body>
                    </Card>
                )
                : null }
        </div>
    );
};

export default Comments;