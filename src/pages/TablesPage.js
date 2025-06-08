import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '../contexts/ThemeContext';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        params.value === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
      }`}>
        {params.value}
      </span>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'jon.snow@example.com', age: 35, status: 'active' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'cersei.lannister@example.com', age: 42, status: 'inactive' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'jaime.lannister@example.com', age: 45, status: 'active' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'arya.stark@example.com', age: 16, status: 'active' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'daenerys.targaryen@example.com', age: null, status: 'inactive' },
  { id: 6, lastName: 'Melisandre', firstName: 'Tom', email: 'melisandre@example.com', age: 150, status: 'active' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'ferrara.clifford@example.com', age: 44, status: 'inactive' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'rossini.frances@example.com', age: 36, status: 'active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'harvey.roxie@example.com', age: 65, status: 'inactive' },
];

const TablesPage = () => {
  const { theme } = useTheme();

  return (
    <div className="h-[600px] w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        checkboxSelection
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme === 'dark' ? '#334155' : '#e2e8f0',
            borderBottom: 'none',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme === 'dark' ? '#334155' : '#e2e8f0',
            borderTop: 'none',
          },
        }}
      />
    </div>
  );
};

export default TablesPage;