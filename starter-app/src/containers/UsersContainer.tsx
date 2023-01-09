import React, { useEffect, useState } from 'react';
import { TUserDto } from '../types/user';
import { getListUsers } from '../api/users';
import { Users } from '../pages/Users';

export const UsersContainer: React.FC = () => {
  const [{ items, currentPage, pagesCount }, setData] = useState<TDataState>({
    items: [],
    pagesCount: 0,
    currentPage: 1,
  });

  useEffect(() => {
    getListUsers(currentPage).then((el) => {
      setData({
        items: el.data,
        currentPage: el.page,
        pagesCount: el.total_pages,
      });
    });
  }, [currentPage]);

  const handleChangePage = (pageNumber: number) => {
    setData((prev) => ({ ...prev, currentPage: pageNumber }));
  };

  return (
    <Users
      items={items}
      currentPage={currentPage}
      pagesCount={pagesCount}
      pageOnChange={handleChangePage}
    />
  );
};

interface TDataState {
  items: Array<TUserDto>;
  pagesCount: number;
  currentPage: number;
}
