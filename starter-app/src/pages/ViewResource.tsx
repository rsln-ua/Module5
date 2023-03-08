import React from 'react';
import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material';

interface IViewResource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export const ViewResource: React.FC<IViewResource> = ({
  id,
  name,
  year,
  pantone_value,
  color,
}) => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2em 1em',
        backgroundColor: color,
      }}
    >
      <Table style={{ maxWidth: '960px' }}>
        <TableBody>
          <TableRow>
            <TableCell>Id:</TableCell>
            <TableCell>{id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name:</TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pantone value:</TableCell>
            <TableCell>{pantone_value}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Year:</TableCell>
            <TableCell>{year}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Color:</TableCell>
            <TableCell>{color}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
