import React, { useContext, useEffect } from 'react';
import { ViewResource } from '../pages/ViewResource';
import { Loader } from '../components/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants/routes';
import { AppStoreContext } from '../stores';
import { observer } from 'mobx-react';

export const ViewResourceContainer: React.FC = observer(() => {
  const { currentResource } = useContext(AppStoreContext);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    currentResource.getItem(+id!).catch(() => {
      navigate(routes.resources.get());
    });

    return () => currentResource.clear();
  }, []);

  return currentResource.item ? (
    <ViewResource {...currentResource.item} />
  ) : (
    <Loader />
  );
});
