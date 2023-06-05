import React from 'react';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

const UserCard = ({userData}) => {
    const router = useNavigate()
    return (
        <Card style={{display: 'flex', justifyContent: 'center', width: '40rem', margin: '20px'}}>
            {userData.map(user =>
                <Card.Body>
                    <Card.Title>Name: {user.name}</Card.Title>
                    <Card.Subtitle>Username: {user.username}</Card.Subtitle>
                    <br/>
                    <Card.Text> Email: {user.email}</Card.Text>
                    <Card.Text> Phone: {user.phone}</Card.Text>
                    <Card.Text> Website: {user.website}</Card.Text>
                </Card.Body>
            )}
            <Button onClick={() => router('/test_task')}>Назад</Button>
        </Card>
    );
};

export default UserCard;