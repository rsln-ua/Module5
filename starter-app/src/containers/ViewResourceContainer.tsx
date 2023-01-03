import React, { useEffect, useState } from 'react';
import { ViewResource } from '../pages/ViewResource';
import { Loader } from '../components/Loader';
import { getResourceById } from '../api/resources';
import { useNavigate, useParams } from 'react-router-dom';
import { TResourcesDto } from '../types/resources';
import { routes } from '../constants/routes';

export const ViewResourceContainer: React.FC = () => {
  const [item, setItem] = useState<TResourcesDto>();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    getResourceById(+id!)
      .then((el) => {
        if (!el.data.id) throw new Error();
        setItem(el.data);
      })
      .catch(() => {
        navigate(routes.resources.get());
      });
  }, []);

  return item ? <ViewResource {...item} /> : <Loader />;
};
