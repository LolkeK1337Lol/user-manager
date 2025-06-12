import React from 'react';
import { Card } from 'react-bootstrap';
import { User } from '../App';

type Props = {
  user: User;
};

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <div>Роль: {user.role}</div>
        <div>Активен: {user.isActive ? 'Да' : 'Нет'}</div>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
