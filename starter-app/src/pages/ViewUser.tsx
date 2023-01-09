import React from 'react';
import { Avatar, Box, Button } from '@mui/material';
import { UserForm } from '../components/UserForm';
import { Link } from 'react-router-dom';
import { routes } from '../constants/routes';

interface IViewUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const ViewUser: React.FC<IViewUser> = ({
  avatar,
  last_name,
  first_name,
  email,
  id,
}) => {
  return (
    <Box
      style={{
        position: 'relative',
        padding: '2em 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1em',
        width: '90%',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <Link to={routes.editUser.get({ id: id })}>
        <Button
          variant={'contained'}
          style={{ position: 'absolute', left: 0, color: 'white' }}
        >
          Edit
        </Button>
      </Link>
      <Avatar src={avatar} sx={{ width: 120, height: 120 }} />
      <UserForm
        isReadonly
        defaultFormValues={{
          avatar,
          email,
          firstName: first_name,
          lastName: last_name,
        }}
      />
    </Box>
  );
};
