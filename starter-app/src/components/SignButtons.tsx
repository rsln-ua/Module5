import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface ISignButtons {
  isAuthorized: boolean;
  onSignIn: () => void;
  onSignUp: () => void;
  onSignOut: () => void;
}

export const SignButtons: React.FC<ISignButtons> = ({
  isAuthorized,
  onSignUp,
  onSignIn,
  onSignOut,
}) => {
  return (
    <Box style={{ display: 'flex', gap: '0.5em', padding: '0 1em' }}>
      {isAuthorized ? (
        <Button variant={'contained'} color={'error'} onClick={onSignOut}>
          <Typography style={{ textTransform: 'capitalize' }}>
            sign out
          </Typography>
        </Button>
      ) : (
        <>
          <Button variant={'contained'} color={'primary'} onClick={onSignIn}>
            <Typography style={{ textTransform: 'capitalize' }}>
              sign in
            </Typography>
          </Button>
          <Button variant={'contained'} color={'success'} onClick={onSignUp}>
            <Typography style={{ textTransform: 'capitalize' }}>
              sign up
            </Typography>
          </Button>
        </>
      )}
    </Box>
  );
};
