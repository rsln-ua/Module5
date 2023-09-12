import React, { useContext, useEffect } from 'react';
import { Users } from '../pages/Users';
import { AppStoreContext } from '../stores';
import { observer } from 'mobx-react';

export const UsersContainer: React.FC = observer(() => {
  const { users } = useContext(AppStoreContext);

  useEffect(() => {
    users.getList();
  }, [users.currentPage]);

  const handleChangePage = (pageNumber: number) => {
    users.currentPage = pageNumber;
  };

  return (
    <Users
      items={users.list}
      currentPage={users.currentPage}
      pagesCount={users.totalPages}
      pageOnChange={handleChangePage}
    />
  );
});
