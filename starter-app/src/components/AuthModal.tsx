import React, { ReactNode } from 'react';
import { Modal, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IAuthModal {
  // isOpen: boolean;
  // onClose: () => void;
  children?: ReactNode;
}

export const AuthModal: React.FC<IAuthModal> = ({ children }) => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate(-1);
  };

  return (
    <Modal open onClose={onClose}>
      <form>
        <TextField label={'Login'} />
        <TextField label={'Password'} type={'password'} />
        {children}
      </form>
    </Modal>
  );
};
