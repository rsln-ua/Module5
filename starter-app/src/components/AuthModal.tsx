import React, { ChangeEventHandler, ReactEventHandler, useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

interface IAuthModal {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (params: {
    email: string;
    password: string;
  }) => void | Promise<void>;
  title: string;
}

export const AuthModal: React.FC<IAuthModal> = ({
  title,
  isOpen,
  onClose,
  onSubmit: _onSubmit,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onSubmit: ReactEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    _onSubmit(formData)?.then(() => {
      setFormData({ email: '', password: '' });
      onClose();
    });
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget?.value;
    if (value === undefined || value === null) return;

    setFormData((prev) => ({
      ...prev,
      password: value,
    }));
  };

  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget?.value;
    if (value === undefined || value === null) return;

    setFormData((prev) => ({
      ...prev,
      email: value,
    }));
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalInnerStyles}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>

        <form onSubmit={onSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5em',
              margin: '1em 0',
            }}
          >
            <TextField
              key={'email'}
              label={'Email'}
              name={'email'}
              onChange={onChangeEmail}
              value={formData.email}
            />
            <TextField
              key={'password'}
              label={'Password'}
              type={'password'}
              name={'password'}
              onChange={onChangePassword}
              value={formData.password}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button type={'submit'} color={'secondary'} variant={'contained'}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

const modalInnerStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
