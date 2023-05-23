import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchCommentsRequest} from "../../store/actions/comments/comments.actions";

const Comment = (props) => {
    const dispatch = useDispatch()
    const [showComments, setShowComments] = useState(false)
    const comments = useSelector(state => state.commentsReducer.comments)
    const handleCommentsToggle = (comment) => {
        if (props.postId in comments) {
            console.log(1)
            setShowComments(comment)
        } else {
            dispatch(fetchCommentsRequest(props.postId))
            setShowComments(comment)
        }
    }
    return (
        <div>
            <Button
                onClick={() => handleCommentsToggle(!showComments)}
            >
                Коментарии
            </Button>
            {
                props.postId in comments && showComments ?
                    comments[props.postId].map(item =>
                        <Card key={item.id}>
                            <Card.Title>{item.email}</Card.Title>
                            <Card.Body>{item.body}</Card.Body>
                        </Card>
                ) : null
            }
        </div>
    );
};

export default Comment;