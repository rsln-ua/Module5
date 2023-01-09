import React, { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants/routes';
import { TUserDto } from '../types/user';
import { getUserById, updateUserById } from '../api/users';
import { EditUser } from '../pages/EditUser';

export const EditUserContainer: React.FC = () => {
  const [item, setItem] = useState<TUserDto>();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(+id!)
      .then((el) => {
        if (!el.data.id) throw new Error();
        setItem(el.data);
      })
      .catch(() => {
        navigate(routes.resources.get());
      });
  }, []);

  const saveUser = (data: Partial<TUserDto>) => {
    updateUserById(+id!, data);
    navigate(routes.success.get());
  };

  return item ? <EditUser onSubmit={saveUser} {...item} /> : <Loader />;
};
