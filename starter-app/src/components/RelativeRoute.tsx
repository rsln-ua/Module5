import React, { ReactNode } from 'react';
import { Location, Route } from 'react-router-dom';

interface IRelativeRoute {
  (props: { path: string; location: Location; children: ReactNode }): ReactNode;
}

export const relativeRoute: IRelativeRoute = ({ path, location, children }) => {
  const pathIndex = location.pathname.indexOf(path);
  let fullPath: string;

  if (pathIndex > 0) {
    fullPath = location.pathname;
  } else {
    fullPath = `${location.pathname}/${path}`;
  }

  console.log('FullPath', fullPath);

  return <Route key={fullPath} path={fullPath} element={<>{children}</>} />;
};
