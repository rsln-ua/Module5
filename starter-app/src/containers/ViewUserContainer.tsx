import React, { useContext, useEffect, useRef } from 'react';
import { Loader } from '../components/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants/routes';
import { ViewUser } from '../pages/ViewUser';
import { AppStoreContext } from '../stores';
import { observer } from 'mobx-react';

export const ViewUserContainer: React.FC = observer(() => {
  const { currentUser } = useContext(AppStoreContext);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dontClearData = useRef<boolean>(false);

  const onEdit = () => {
    dontClearData.current = true;
  };

  useEffect(() => {
    currentUser.getItem(+id!).catch(() => {
      navigate(routes.resources.get());
    });

    return () => {
      if (!dontClearData.current) {
        currentUser.clear();
      }
    };
  }, []);

  return currentUser.item ? (
    <ViewUser {...currentUser.item} onEdit={onEdit} />
  ) : (
    <Loader />
  );
});
