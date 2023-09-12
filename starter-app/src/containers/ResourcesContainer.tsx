import { observer } from 'mobx-react';
import { Resources } from '../pages/Resources';
import React, { useContext, useEffect } from 'react';
import { AppStoreContext } from '../stores';

export const ResourcesContainer: React.FC = observer(() => {
  const { resources } = useContext(AppStoreContext);

  useEffect(() => {
    resources.getList();
  }, [resources.currentPage]);

  const handleChangePage = (pageNumber: number) => {
    resources.currentPage = pageNumber;
  };

  return (
    <Resources
      items={resources.list}
      currentPage={resources.currentPage}
      pagesCount={resources.totalPages}
      pageOnChange={handleChangePage}
    />
  );
});
