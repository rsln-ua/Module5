import React, { FC, ReactNode } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const useStyles = makeStyles({
  contentWrapper: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',

    '& > *': {
      flexGrow: 1,
    },
  },
});

const Layout: FC<LayoutProps> = ({ children }) => {
  const styles = useStyles();

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
        <Navbar />
        <Box className={styles.contentWrapper}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
