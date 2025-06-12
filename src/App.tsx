import React, { useState } from 'react';
import UserForm from './components/UserForm';
import Users from './components/Users';
import { Container, Row, Col } from 'react-bootstrap';

export interface User {
  name: string;
  email: string;
  isActive: boolean;
  role: 'user' | 'editor' | 'admin';
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <UserForm onAddUser={addUser} />
        </Col>
        <Col md={6}>
          <Users users={users} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
