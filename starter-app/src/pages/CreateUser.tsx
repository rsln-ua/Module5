import React from 'react';
import { Avatar, Box, Button } from '@mui/material';
import { UserForm } from '../components/UserForm';
import { TUserDto } from '../types/user';

interface IEditUser {
  onSubmit: (data: Partial<TUserDto>) => void;
}

export const CreateUser: React.FC<IEditUser> = ({ onSubmit }) => {
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
      <Avatar sx={{ width: 120, height: 120 }} />
      <UserForm onSubmit={onSubmit}>
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
