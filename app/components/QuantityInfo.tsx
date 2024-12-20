import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  recived_qty: number,
  current_qty: number,
  disposed_qty: number,
  shipped_qty: number,
) {
  return { recived_qty, current_qty, disposed_qty, shipped_qty };
}

const rows = [
  createData(500 , 50, 0, 24),
];

export default function QuantityInfo() {
  return (
    <TableContainer component={Paper} className="shadow-none">
      <Table
        sx={{
          minWidth: 250,
          maxWidth: 280,
          maxHeight:140,
          borderCollapse: 'collapse',  
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              className="bg-zinc-300"
              sx={{ borderRight: '1px solid #2222' }} // Adds vertical border
            >
              Recived Quantity
            </TableCell>
            <TableCell
              align="center"
              className="bg-zinc-300"
              sx={{ borderRight: '1px solid #2222' }}
            >
              Current Quantity
            </TableCell>
            <TableCell
              align="center"
              className="bg-zinc-300"
              sx={{ borderRight: '1px solid #2222' }}
            >
              Disposed Quantity
            </TableCell>
            <TableCell align="center" className="bg-zinc-300">
              Shipped Quantity
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.recived_qty}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{ borderRight: '1px solid #2222' }}
              >
                {row.recived_qty}
              </TableCell>
              <TableCell align="center" sx={{ borderRight: '1px solid #2222' }}>
                {row.current_qty}
              </TableCell>
              <TableCell align="center" sx={{ borderRight: '1px solid #2222' }}>
                {row.disposed_qty}
              </TableCell>
              <TableCell align="center">{row.shipped_qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
