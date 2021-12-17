import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
];

const rows = [
    { id: 0, lastName: 'Voscak', firstName: 'Jimi' },
    { id: 1, lastName: 'Snow', firstName: 'Jon' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
    { id: 4, lastName: 'Stark', firstName: 'Arya' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
    { id: 6, lastName: 'Melisandre', firstName: null },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
];



export default function DataGridDemo() {
    return (
        <div style={{ height: 400, width: '100%', margin: "25px" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                //checkboxSelection
                disableSelectionOnClick
                sx={{
                    color: "whitesmoke",
                    boxShadow: 1,
                    border: 1,
                    borderColor: 'whitesmoke',
                    '& .MuiDataGrid-cell:hover': {
                        color: '#61dafb;'
                    },
                }}
            />
        </div>
    );
}

