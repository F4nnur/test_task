import React from 'react';
import {InfinitySpin} from "react-loader-spinner";
import s from './styles.module.css'
import IMAGES from "../../constants/images";
import Card from 'react-bootstrap/Card';
import Comment from "../Comments/Comment";
import {useNavigate} from 'react-router-dom'

const PostsList = ({postData, posts}) => {
    const router = useNavigate()

    if (postData.isLoading) {
        return <div className={s.loader} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <InfinitySpin width='200' color='#6A5ACD'/>
        </div>
    }
    return (
        <div>
            {
                posts.map(item =>
                    <Card
                        key={item.id}
                        style={{
                            width: '35%',
                            margin: 'auto auto',
                            marginBottom: '15px',
                            top: '80px',
                            alignItems: 'center',
                        }}
                    >
                        <Card.Img
                            onClick={() => router(`/test_task/userinfo/${item.userId}`)}
                            variant="center"
                            src={IMAGES.user}
                            style={{width: '100px', cursor: 'pointer'}}
                        />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.body}
                            </Card.Text>
                            <Comment postId={item.id}/>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    );
};

export default PostsList;