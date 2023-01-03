import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React, { ReactNode } from 'react';

interface ICardItem {
  children: ReactNode;
  title: ReactNode;
  mediaUrl?: string;
}

export const CardItem: React.FC<ICardItem> = ({
  children,
  title,
  mediaUrl,
}) => {
  return (
    <Grid2 md={6} xs={12}>
      <Card>
        <CardMedia component="img" image={mediaUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </Grid2>
  );
};
