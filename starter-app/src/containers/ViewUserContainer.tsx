import React, { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants/routes';
import { TUserDto } from '../types/user';
import { getUserById } from '../api/users';
import { ViewUser } from '../pages/ViewUser';

export const ViewUserContainer: React.FC = () => {
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

  return item ? <ViewUser {...item} /> : <Loader />;
};
