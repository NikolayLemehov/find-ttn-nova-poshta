import {Box, Button, Container, Stack} from '@mui/material';
import { blue } from '@mui/material/colors';
import {useNavigate} from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box p={2} bgcolor={blue[50]}>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => navigate('/')}
          >Перевірити ТТН</Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/warehouses')}
          >Список відділень</Button>
        </Stack>
      </Container>
    </Box>
  );
}
