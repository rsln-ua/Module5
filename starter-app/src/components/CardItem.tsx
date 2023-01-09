import { Card, CardContent } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React, { ReactNode } from 'react';

interface ICardItem {
  children: ReactNode;
}

export const CardItem: React.FC<ICardItem> = ({ children }) => {
  return (
    <Grid2 md={6} xs={12}>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </Grid2>
  );
};
