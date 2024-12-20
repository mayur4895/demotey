// app/table/page.tsx

"use client";

import * as React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"; // Import DataGrid and necessary types
import { Box } from "@mui/material";

const rows: GridRowsProp = [ 
        { id: 1, name: "John Doe", traces: 4, last_seen: new Date().toLocaleDateString() },
        { id: 2, name: "Jane Smith", traces: 4, last_seen: new Date().toLocaleDateString() },
        { id: 3, name: "Samuel Green", traces: 5, last_seen: new Date().toLocaleDateString() },
        { id: 4, name: "Anna Lee", traces: 4, last_seen: new Date().toLocaleDateString() },
        { id: 5, name: "David Brown", traces: 6, last_seen: new Date().toLocaleDateString() },
        { id: 6, name: "Emily Clark", traces: 7, last_seen: new Date().toLocaleDateString() },
        { id: 7, name: "Michael White", traces: 3, last_seen: new Date().toLocaleDateString() },
        { id: 8, name: "Sophia Harris", traces: 5, last_seen: new Date().toLocaleDateString() },
        { id: 9, name: "Daniel Lewis", traces: 2, last_seen: new Date().toLocaleDateString() },
        { id: 10, name: "Olivia Walker", traces: 4, last_seen: new Date().toLocaleDateString() },
        { id: 11, name: "James Young", traces: 6, last_seen: new Date().toLocaleDateString() },
        { id: 12, name: "Isabella Hall", traces: 4, last_seen: new Date().toLocaleDateString() },
        { id: 13, name: "William Allen", traces: 8, last_seen: new Date().toLocaleDateString() },
        { id: 14, name: "Charlotte King", traces: 3, last_seen: new Date().toLocaleDateString() },
        { id: 15, name: "Alexander Scott", traces: 5, last_seen: new Date().toLocaleDateString() },
        { id: 16, name: "Avery Adams", traces: 7, last_seen: new Date().toLocaleDateString() },
        { id: 17, name: "Mason Perez", traces: 2, last_seen: new Date().toLocaleDateString() },
        { id: 18, name: "Amelia Mitchell", traces: 6, last_seen: new Date().toLocaleDateString() },
        { id: 19, name: "Ethan Carter", traces: 4, last_seen: new Date().toLocaleDateString() },
        { id: 20, name: "Harper Roberts", traces: 3, last_seen: new Date().toLocaleDateString() }
 
      
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "traces", headerName: "Traces", width: 150 },
  { field: "last_seen", headerName: "Last seen", width: 200 },
];

const DataTable = () => {
  return (
    <Box sx={{ height: 400  }}>
      <DataGrid
        rows={rows}
        columns={columns} 
        density="compact"  
      />
    </Box>
  );
};

export default DataTable;
