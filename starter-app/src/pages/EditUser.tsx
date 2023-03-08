import React from 'react';
import { Avatar, Box, Button } from '@mui/material';
import { UserForm } from '../components/UserForm';
import { TUserDto } from '../types/user';

interface IEditUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  onSubmit: (data: Partial<TUserDto>) => void;
}

export const EditUser: React.FC<IEditUser> = ({
  avatar,
  last_name,
  first_name,
  email,
  onSubmit,
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
      <Avatar src={avatar} sx={{ width: 120, height: 120 }} />
      <UserForm
        defaultFormValues={{
          avatar,
          email,
          firstName: first_name,
          lastName: last_name,
        }}
        onSubmit={onSubmit}
      >
        <Button
          variant={'contained'}
          color={'success'}
          style={{ position: 'absolute', right: 0, top: '2em', color: 'white' }}
          type={'submit'}
        >
          Save
        </Button>
      </UserForm>
    </Box>
  );
};
