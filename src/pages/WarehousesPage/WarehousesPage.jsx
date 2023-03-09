import {Box, Typography} from '@mui/material';
import {useGetAllWarehouseMutation} from '../../store/warehouse/warehouse.api';
import {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';

const pageSize = 10;

export default function WarehousesPage() {
  const [rowCount, setRowCount] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize,
  });
  const [getAllWarehouse, resultGetAllWarehouse] = useGetAllWarehouseMutation();

  useEffect(() => {
    getAllWarehouse(paginationModel);
  }, [getAllWarehouse, paginationModel]);

  useEffect(() => {
    setRowCount((prevRowCount) =>
      resultGetAllWarehouse?.data?.info?.totalCount !== undefined
        ? resultGetAllWarehouse?.data?.info?.totalCount
        : prevRowCount,
    );
  }, [resultGetAllWarehouse?.data?.info?.totalCount, setRowCount]);

  const columns = [
    {
      field: 'CityDescription',
      headerName: 'City',
      width: 180,
      editable: true,
    },
    {
      field: 'Description',
      headerName: 'Warehouse',
      width: 500,
      editable: true,
    },
  ];

  return (
    <>
      <Typography variant="h3" component="h1" textAlign='center' marginBottom={2}>
        Список відділень
      </Typography>
      {resultGetAllWarehouse?.data?.data && (
        <Box sx={{height: 631, width: '100%'}}>
          <DataGrid
            columns={columns}
            getRowId={it=>it.WarehouseIndex}
            rows={resultGetAllWarehouse?.data?.data}
            rowCount={rowCount}
            loading={resultGetAllWarehouse.isLoading}
            pageSizeOptions={[5]}
            paginationModel={paginationModel}
            paginationMode="server"
            onPaginationModelChange={setPaginationModel}
          />
        </Box>
      )}
    </>
  );
}
