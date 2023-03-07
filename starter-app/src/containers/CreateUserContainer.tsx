import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants/routes';
import { CreateUser } from '../pages/CreateUser';
import { TUserDto } from '../types/user';
import { createUser } from '../api/users';
import { useAppState, useCleanupUserDataUnmount } from '../hooks/state';
import { observer } from 'mobx-react';
import { AbstractErrorMsg } from '../constants/errors';

export const CreateUserContainer: React.FC = observer(() => {
  const navigate = useNavigate();
  const { currentUser } = useAppState();
  const setCleanup = useCleanupUserDataUnmount();
  const saveUser = (data: Partial<TUserDto>) => {
    createUser(data).then((res) => {
      if (!res?.id) throw new Error(AbstractErrorMsg);
      debugger;
      const userId = +res.id;

      setCleanup(false);
      currentUser.item = {
        ...currentUser.item,
        ...data,
        id: userId,
      } as TUserDto;
      navigate(routes.viewUser.get({ id: userId }));
    });
  };
  return <CreateUser onSubmit={saveUser} />;
});
