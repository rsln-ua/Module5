import React, { useEffect } from 'react';
import { Loader } from '../components/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants/routes';
import { ViewUser } from '../pages/ViewUser';
import { observer } from 'mobx-react';
import { useAppState, useCleanupUserDataUnmount } from '../hooks/state';

export const ViewUserContainer: React.FC = observer(() => {
  const { currentUser } = useAppState();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const setCleanup = useCleanupUserDataUnmount();

  const onEdit = () => {
    setCleanup(false);
  };

  useEffect(() => {
    currentUser.getItem(+id!).catch(() => {
      navigate(routes.resources.get());
    });
  }, []);

  return currentUser.item ? (
    <ViewUser {...currentUser.item} onEdit={onEdit} />
  ) : (
    <Loader />
  );
});
