import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IReactLink {
  to: string;
  children: ReactNode;
}

export const ReactLink: React.FC<IReactLink> = ({ children, to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </Link>
  );
};
