import React, { ReactNode } from 'react';
import { observer } from 'mobx-react';
import Layout from '../components/Layout';
import { useAppState } from '../hooks/state';
import { Loader } from '../components/Loader';
import { Routes, useLocation, useNavigate } from 'react-router-dom';
import { AuthModal } from '../components/AuthModal';
import { relativeRoute } from '../components/RelativeRoute';

interface ILayoutContainer {
  children: ReactNode;
}

export const LayoutContainer: React.FC<ILayoutContainer> = observer(
  ({ children }) => {
    const { auth } = useAppState();
    const navigate = useNavigate();
    const location = useLocation();

    const onSignUp = () => {};
    const onSignIn = () => {
      navigate(location.pathname + '/' + 'test');
    };
    const onSignOut = () => {
      auth.token = null;
    };

    return (
      <>
        <Loader active={auth.isLoading} />
        <Layout
          isAuthorized={auth.isAuthorized}
          onSignIn={onSignIn}
          onSignOut={onSignOut}
          onSignUp={onSignUp}
        >
          {children}
        </Layout>
        <Routes>
          {relativeRoute({
            location,
            path: 'test',
            children: <AuthModal />,
          })}
        </Routes>
      </>
    );
  }
);
