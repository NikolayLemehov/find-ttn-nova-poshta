import {Box, Button, ButtonGroup, Stack, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {useGetTtnMutation} from '../../store/ttn/ttn.api';
import {useSelector} from 'react-redux';
import {ttnHistorySelector} from '../../store/ttn/ttn.selector';

export default function HomePage() {
  const [ttnValue, setTtnValue] = useState('');
  const [getTtn, resultGetTtn] = useGetTtnMutation();
  const ttnHistory = useSelector(ttnHistorySelector);

  const onSubmit = (e) => {
    e.preventDefault();
    getTtn(ttnValue);
  };

  const {
    WarehouseSender, WarehouseRecipient, Status,
  } = resultGetTtn?.data?.data[0] ?? {};

  return (
    <Stack gap={2}>
      <Typography variant="h3" component="h1" textAlign='center'>
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
          minHeight: 300,
          p: 2,
          border: '1px dashed grey',
        }}>
          {resultGetTtn?.data?.data[0] && <>
            <Typography>
              <b>Статус доставки:</b> {Status}
            </Typography>
            {WarehouseSender &&
              <Typography>
                <b>Відправлено:</b> {WarehouseSender}
              </Typography>
            }
            {WarehouseRecipient &&
              <Typography>
                <b>Отримано:</b> {WarehouseRecipient}
              </Typography>
            }
          </>}
        </Box>
        <Box sx={{
          width: 500,
          minHeight: 300,
          p: 2,
          border: '1px dashed grey',
        }}>
          <Typography variant='h4' component='h2' marginBottom={2}>
            Історія
          </Typography>
          <Stack
            gap={1}
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
          >
            {ttnHistory.map(it =>
              <ButtonGroup key={it}
                orientation="horizontal"
                aria-label="vertical contained button group"
                variant="text"
              >
                <Button
                  onClick={() => {
                    getTtn(it);
                    setTtnValue(it);
                  }}
                >{it}</Button>
                <Button
                  onClick={() => navigator.clipboard.writeText(it)}
                >copy</Button>
              </ButtonGroup>)}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
