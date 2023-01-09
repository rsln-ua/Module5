import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants/routes';
import { CreateUser } from '../pages/CreateUser';
import { TUserDto } from '../types/user';
import { createUser } from '../api/users';

export const CreateUserContainer: React.FC = () => {
  const navigate = useNavigate();
  const saveUser = (data: Partial<TUserDto>) => {
    createUser(data);
    navigate(routes.success.get());
  };

  return <CreateUser onSubmit={saveUser} />;
};
