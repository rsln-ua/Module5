import React, { useEffect } from 'react';
import { Loader } from '../components/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants/routes';
import { TUserDto } from '../types/user';
import { EditUser } from '../pages/EditUser';
import { observer } from 'mobx-react';
import { useAppState, useCleanupUserDataUnmount } from '../hooks/state';

export const EditUserContainer: React.FC = observer(() => {
  const { currentUser } = useAppState();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const setCleanup = useCleanupUserDataUnmount();

  useEffect(() => {
    currentUser.getItem(+id!).catch(() => {
      navigate(routes.resources.get());
    });
  }, []);

  const saveUser = (data: Partial<TUserDto>) => {
    setCleanup(false);
    currentUser.updateUser(data).then(
      () => {
        navigate(routes.viewUser.get({ id: +id! }));
      },
      (err) => console.log(err)
    );
  };

  return currentUser.item ? (
    <EditUser onSubmit={saveUser} {...currentUser.item} />
  ) : (
    <Loader />
  );
});
