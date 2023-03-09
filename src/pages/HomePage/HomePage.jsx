import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {useGetTtnMutation} from '../../store/ttn.api';

export default function HomePage() {
  const [ttnValue, setTtnValue] = useState('');
  const [getTtn, resultGetTtn] = useGetTtnMutation();
  console.log(resultGetTtn?.data);

  const onSubmit = (e) => {
    e.preventDefault();
    getTtn('59000935407810');
  };

  const {
    WarehouseSender, WarehouseRecipient, Status,
  } = resultGetTtn?.data?.data[0] ?? {};
  console.log({WarehouseSender, WarehouseRecipient});

  return (
    <Stack gap={2}>
      <Typography variant="h2" component="h1" textAlign='center'>
        Відстежити посилку
      </Typography>

      <form onSubmit={onSubmit}>
        <Stack direction="row" alignItems='center' spacing={2}>
          <TextField
            label='TTN'
            value={ttnValue}
            onChange={({target}) => setTtnValue(target.value)}
          />
          <Button variant="outlined" type='submit'>Get status TTN</Button>
        </Stack>
      </form>

      <Stack direction="row" gap={3}>
        <Box sx={{
          flexGrow: 1,
          width: 300,
          height: 300,
          p: 2,
          border: '1px dashed grey',
        }}>
          {resultGetTtn?.data?.data[0] &&
            <>
              <Typography>
                <b>Статус доставки:</b> {Status}
              </Typography>
              <Typography>
                <b>Відправлено:</b> {WarehouseSender}
              </Typography>
              <Typography>
                <b>Отримано:</b> {WarehouseRecipient}
              </Typography>
            </>
          }
        </Box>
        <Box sx={{
          width: 500,
          height: 300,
          p: 2,
          border: '1px dashed grey',
        }}>
          <Typography variant='h4' component='h2'>Історія</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
