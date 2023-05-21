import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncSetPosts} from "../../store/actions/posts/posts.actions";
import {InfinitySpin} from "react-loader-spinner";
import s from './styles.module.css'
import IMAGES from "../../constants/images";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PostsList = () => {
    const postData = useSelector(state => state.postsReducer)
    const [showComments, setShowComments] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncSetPosts())
    }, dispatch)

    if (postData.isLoading) {
        return <div className={s.loader}>
            <InfinitySpin width='200' color='#6A5ACD'/>
        </div>
    }
    return (
        <>
            {
                postData.posts.map(item =>
                    <Card
                        id={item.id}
                        style={{
                            width: '35%',
                            margin: 'auto auto',
                            marginBottom: '15px',
                            top:'100px',
                            alignItems: 'center'
                    }}
                    >
                        <Card.Img
                            variant="center"
                            src={IMAGES.user}
                            style={{width:'100px'}}
                        />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.body}
                            </Card.Text>
                            <Button
                                onvariant={"info"}
                                onClick={() => setShowComments(!showComments)}
                            >
                                Коментарии
                            </Button>
                        </Card.Body>
                        {showComments ? <h1>Comment</h1> : null}
                    </Card>
                )
            }
        </>
    );
};

export default PostsList;