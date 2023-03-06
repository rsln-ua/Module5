import React, { useContext, useEffect, useRef } from 'react';
import { Loader } from '../components/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../constants/routes';
import { TUserDto } from '../types/user';
import { EditUser } from '../pages/EditUser';
import { AppStoreContext } from '../stores';
import { observer } from 'mobx-react';

export const EditUserContainer: React.FC = observer(() => {
  const { currentUser } = useContext(AppStoreContext);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dontClearData = useRef<boolean>(false);

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

  const saveUser = (data: Partial<TUserDto>) => {
    dontClearData.current = true;
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
