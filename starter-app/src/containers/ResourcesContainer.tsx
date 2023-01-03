import { Resources } from '../pages/Resources';
import React, { useEffect, useState } from 'react';
import { getListResources } from '../api/resources';
import { TResourcesDto } from '../types/resources';

export const ResourcesContainer: React.FC = () => {
  const [{ items, currentPage, pagesCount }, setData] = useState<TDataState>({
    items: [],
    pagesCount: 0,
    currentPage: 1,
  });
  useEffect(() => {
    getListResources(currentPage).then((el) => {
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
    <Resources
      items={items}
      currentPage={currentPage}
      pagesCount={pagesCount}
      pageOnChange={handleChangePage}
    />
  );
};

interface TDataState {
  items: Array<TResourcesDto>;
  pagesCount: number;
  currentPage: number;
}
