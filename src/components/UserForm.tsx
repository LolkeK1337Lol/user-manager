import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { User } from '../App';

type Props = {
  onAddUser: (user: User) => void;
};

const UserForm: React.FC<Props> = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [role, setRole] = useState<'user' | 'editor' | 'admin'>('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser({ name, email, isActive, role });
    setName('');
    setEmail('');
    setIsActive(false);
    setRole('user');
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.checked);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Имя</Form.Label>
        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Активен"
          checked={isActive}
          onChange={handleCheckboxChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Роль</Form.Label>
        <Form.Select value={role} onChange={e => setRole(e.target.value as any)}>
          <option value="user">Пользователь</option>
          <option value="editor">Редактор</option>
          <option value="admin">Администратор</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit">Добавить</Button>
    </Form>
  );
};

export default UserForm;
