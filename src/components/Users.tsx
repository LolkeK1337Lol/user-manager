import React from 'react';
import { User } from '../App';
import UserItem from './UserItem';

type Props = {
  users: User[];
};

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <h3>Список пользователей</h3>
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;
