import React from 'react';
import { Box, Typography } from '@mui/material';
import { TResourcesDto } from '../types/resources';
import { CardListContainer } from '../components/CardListContainer';
import { CardItem } from '../components/CardItem';
import { Link } from 'react-router-dom';
import { routes } from '../constants/routes';

interface IResources {
  items: Array<TResourcesDto>;
  pagesCount: number;
  currentPage: number;
  pageOnChange: (page: number) => void;
}

export const Resources: React.FC<IResources> = ({
  items,
  pagesCount,
  currentPage,
  pageOnChange,
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h2">Resources</Typography>

      <CardListContainer
        pagesCount={pagesCount}
        currentPage={currentPage}
        pageOnChange={pageOnChange}
      >
        {items.map((el) => (
          <CardItem key={el.id} title={el.name}>
            <Link to={routes.viewResource.get({ id: el.id })}>
              <Typography gutterBottom variant="h6" component="div">
                id: {el.id}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                year: {el.year}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                pantone value: {el.pantone_value}
              </Typography>
              <Box style={{ backgroundColor: el.color }}>
                <Typography gutterBottom variant="h6" component="div">
                  color: {el.color}
                </Typography>
              </Box>
            </Link>
          </CardItem>
        ))}
      </CardListContainer>
    </Box>
  );
};
