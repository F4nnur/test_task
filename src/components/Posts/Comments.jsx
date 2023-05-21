import React from 'react';
import Button from "react-bootstrap/Button";
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncSetComments} from "../../store/actions/comments/comments.actions";

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
            { showComments ? itemId : null }
        </div>
    );
};

export default Comments;