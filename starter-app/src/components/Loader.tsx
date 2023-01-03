import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface ILoader {
  active?: boolean;
}

export const Loader: React.FC<ILoader> = ({ active = true }) => {
  if (!active) return null;

  return (
    <Box
      style={{
        position: 'fixed',
        inset: '0 0 0 0',
        opacity: 0.5,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
