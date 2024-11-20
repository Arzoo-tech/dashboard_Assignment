import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/Table.module.scss';

const CustomTable = ({ initialHeaders, initialData }) => {
  const [headers, setHeaders] = useState(initialHeaders);
  const [data, setData] = useState(initialData);

  const deleteColumn = (index) => {
    const updatedHeaders = headers.filter((_, headerIndex) => headerIndex !== index);
    setHeaders(updatedHeaders);

    const updatedData = data.map((row) => row.filter((_, cellIndex) => cellIndex !== index));
    setData(updatedData);
  };

  return (
    <TableContainer component={Paper} className={styles['table-container']}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{header.name}</span>
                  <IconButton size="small" onClick={() => deleteColumn(index)}>
                      <DeleteIcon fontSize="small" className={styles['delete-icon']} />
                  </IconButton>

                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
