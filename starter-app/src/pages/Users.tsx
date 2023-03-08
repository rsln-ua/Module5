import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { CardListContainer } from '../components/CardListContainer';
import { CardItem } from '../components/CardItem';
import { routes } from '../constants/routes';
import { TUserDto } from '../types/user';
import { ReactLink } from '../components/ReactLink';

interface IUsers {
  items: Array<TUserDto>;
  pagesCount: number;
  currentPage: number;
  pageOnChange: (page: number) => void;
}

export const Users: React.FC<IUsers> = ({
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
      <Box
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1em',
          }}
        >
          <Typography variant="h2">Users</Typography>
          <ReactLink to={routes.createUser.get()}>
            <Button style={{ color: 'white' }} variant={'contained'}>
              New +
            </Button>
          </ReactLink>
        </Box>
        <CardListContainer
          pagesCount={pagesCount}
          currentPage={currentPage}
          pageOnChange={pageOnChange}
        >
          {items.map((el) => (
            <CardItem key={el.id}>
              <ReactLink to={routes.viewUser.get({ id: el.id })}>
                <Box sx={{ display: 'flex', gap: '1em' }}>
                  <Avatar src={el.avatar} sx={{ width: 56, height: 56 }} />
                  <Box>
                    <Typography gutterBottom variant="h6" component="div">
                      id: {el.id}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      First Name: {el.first_name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Last name: {el.last_name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Email: {el.email}
                    </Typography>
                  </Box>
                </Box>
              </ReactLink>
            </CardItem>
          ))}
        </CardListContainer>
      </Box>
    </Box>
  );
};
