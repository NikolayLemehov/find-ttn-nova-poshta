import {Box, Button, Stack, TextField, Typography} from '@mui/material';

export default function HomePage() {
  return (
    <Stack gap={2}>
      <Typography variant="h2" component="h1" textAlign='center'>
        Відстежити посилку
      </Typography>

      <Stack direction="row" alignItems='center' spacing={2}>
        <TextField/>
        <Button variant="outlined">Get status TTN</Button>
      </Stack>

      <Stack direction="row" gap={3}>
        <Box sx={{
          flexGrow: 1,
          width: 300,
          height: 300,
          p: 2,
          border: '1px dashed grey',
        }}>
          <Typography>something</Typography>
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
