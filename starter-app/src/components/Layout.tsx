import React, { FC, ReactNode } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  isAuthorized: boolean;
  onSignIn: () => void;
  onSignUp: () => void;
  onSignOut: () => void;
}

const Layout: FC<LayoutProps> = ({
  children,
  isAuthorized,
  onSignUp,
  onSignIn,
  onSignOut,
}) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          minHeight: '100vh',
          maxWidth: '100vw',
        }}
      >
        <Navbar
          isAuthorized={isAuthorized}
          onSignIn={onSignIn}
          onSignUp={onSignUp}
          onSignOut={onSignOut}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',

            '& > *': {
              flexGrow: 1,
            },
          }}
        >
          {children}
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Layout;
