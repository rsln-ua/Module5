import React from 'react';
import { Box, styled } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PageWrapper = styled(Box)({
  backgroundColor: 'lightgreen',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'whitesmoke',
  fontSize: '6em',
});

export const SuccessPage: React.FC = () => {
  return (
    <PageWrapper>
      <CheckCircleIcon fontSize={'inherit'} />
    </PageWrapper>
  );
};
