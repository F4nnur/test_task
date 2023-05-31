import React from 'react';
import {InfinitySpin} from "react-loader-spinner";
import s from './styles.module.css'
import IMAGES from "../../constants/images";
import Card from 'react-bootstrap/Card';
import Comment from "../Comments/Comment";

const PostsList = ({postData}) => {
    if (postData.isLoading) {
        return <div className={s.loader}>
            <InfinitySpin width='200' color='#6A5ACD'/>
        </div>
    }
    return (
        <div>
            {
                postData.posts.map(item =>
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
                            variant="center"
                            src={IMAGES.user}
                            style={{width: '100px'}}
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