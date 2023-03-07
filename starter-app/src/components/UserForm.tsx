import React, { ChangeEvent, ReactNode, useState } from 'react';
import { FormControl, TextField } from '@mui/material';
import { isEmailValid } from '../helpers/validation';
import { TUserDto } from '../types/user';

interface IUserForm {
  children?: ReactNode;
  isReadonly?: boolean;
  defaultFormValues?: TUserFormData;
  onSubmit?: (data: Partial<TUserDto>) => void;
}

interface TUserFormData {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

type TErrorsData = Partial<Record<keyof TUserFormData, boolean>>;
type validations = Array<[keyof TUserFormData, (value: string) => boolean]>;

export const UserForm: React.FC<IUserForm> = ({
  isReadonly,
  defaultFormValues,
  children,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Partial<TUserFormData>>(
    defaultFormValues || {}
  );
  const [errors, setErrors] = useState<TErrorsData>({});

  const handleOnChange =
    (key: keyof TUserFormData, validate?: (value: string) => boolean) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      if (isReadonly) return;
      const value = e.target.value;

      setFormData((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => ({ ...prev, [key]: validate?.(value) === false }));
    };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const _errors = (
      [
        [formKeys.firstName, Boolean],
        [formKeys.lastName, Boolean],
        [formKeys.avatar, Boolean],
        [formKeys.email, isEmailValid],
      ] as validations
    ).map(([key, validator]) => validator(formData[key]!));

    if (_errors.every((el) => el)) {
      onSubmit?.(formData2DTO(formData));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '100%', position: 'initial' }}
    >
      <FormControl style={{ width: '100%', position: 'initial' }}>
        <TextField
          label={formLabels[formKeys.firstName]}
          value={formData[formKeys.firstName]}
          error={errors[formKeys.firstName]}
          onChange={handleOnChange(formKeys.firstName, Boolean)}
          variant="filled"
          aria-errormessage={'Test message'}
        />
        <TextField
          label={formLabels[formKeys.lastName]}
          value={formData[formKeys.lastName]}
          error={errors[formKeys.lastName]}
          onChange={handleOnChange(formKeys.lastName, Boolean)}
          variant="filled"
        />
        <TextField
          label={formLabels[formKeys.email]}
          value={formData[formKeys.email]}
          error={errors[formKeys.email]}
          onChange={handleOnChange(formKeys.email, isEmailValid)}
          variant="filled"
        />
        <TextField
          label={formLabels[formKeys.avatar]}
          value={formData[formKeys.avatar]}
          error={errors[formKeys.avatar]}
          onChange={handleOnChange(formKeys.avatar, Boolean)}
          variant="filled"
        />
        {children}
      </FormControl>
    </form>
  );
};

const formKeys: Record<keyof TUserFormData, keyof TUserFormData> = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  avatar: 'avatar',
};

const formLabels: Record<keyof TUserFormData, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  avatar: 'Avatar',
};

function formData2DTO(data: Partial<TUserFormData>): Partial<TUserDto> {
  return {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    avatar: data.avatar,
  };
}
