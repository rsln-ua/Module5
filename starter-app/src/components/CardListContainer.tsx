import React, { ReactNode } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Box, Pagination } from '@mui/material';

interface ICardListContainer {
  children: ReactNode;
  pagesCount: number;
  currentPage: number;
  pageOnChange: (page: number) => void;
}

export const CardListContainer: React.FC<ICardListContainer> = ({
  children,
  currentPage,
  pagesCount,
  pageOnChange,
}) => {
  const handleChange = (_: unknown, pageNumber: number) => {
    pageOnChange(pageNumber);
  };

  return (
    <Box>
      <Grid2 container spacing={2}>
        {children}
      </Grid2>
      <Box
        style={{ display: 'flex', justifyContent: 'center', padding: '1em 0' }}
      >
        {pagesCount > 1 && (
          <Pagination
            count={pagesCount}
            page={currentPage}
            onChange={handleChange}
          />
        )}
      </Box>
    </Box>
  );
};
