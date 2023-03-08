import React, { ReactNode, useState } from 'react';
import { observer } from 'mobx-react';
import Layout from '../components/Layout';
import { useAppState } from '../hooks/state';
import { Loader } from '../components/Loader';
import { AuthModal } from '../components/AuthModal';
import { Alert, Snackbar } from '@mui/material';

interface ILayoutContainer {
  children: ReactNode;
}

export const LayoutContainer: React.FC<ILayoutContainer> = observer(
  ({ children }) => {
    const { auth } = useAppState();
    const [modalsState, setModalsState] = useState({
      signIn: false,
      signUp: false,
    });

    const onSignUpOpen = () => {
      setModalsState({ signIn: false, signUp: true });
    };
    const onSignInOpen = () => {
      setModalsState({ signIn: true, signUp: false });
    };
    const onSignUpSubmit = (params: { email: string; password: string }) => {
      return auth.register(params.email, params.password);
    };
    const onSignInSubmit = (params: { email: string; password: string }) => {
      return auth.login(params.email, params.password);
    };
    const onSignUpClose = () => {
      setModalsState({ signIn: false, signUp: false });
    };
    const onSignInClose = () => {
      setModalsState({ signIn: false, signUp: false });
    };
    const onSignOut = () => {
      auth.token = null;
    };
    const clearErrors = () => {
      auth.error = '';
    };

    return (
      <>
        <Loader active={auth.isLoading} />
        <Layout
          isAuthorized={auth.isAuthorized}
          onSignIn={onSignInOpen}
          onSignOut={onSignOut}
          onSignUp={onSignUpOpen}
        >
          {children}
        </Layout>
        <AuthModal
          title={'Sign In'}
          isOpen={modalsState.signIn}
          onClose={onSignInClose}
          onSubmit={onSignInSubmit}
        />
        <AuthModal
          title={'Sign Up'}
          isOpen={modalsState.signUp}
          onClose={onSignUpClose}
          onSubmit={onSignUpSubmit}
        />
        <Snackbar
          open={Boolean(auth.error)}
          autoHideDuration={4000}
          onClose={clearErrors}
        >
          <Alert color={'error'}>{auth.error}</Alert>
        </Snackbar>
      </>
    );
  }
);
