import {Stack, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <Stack gap={4}>
      <Typography variant="h2" component="h1" textAlign='center'>
        404 Page not found.
      </Typography>
      <Typography variant="h5" component="p" textAlign='center'>
        Оберіть сторінку в меню, або перейдіть на <NavLink to='/'>домашню сторінку</NavLink>.
      </Typography>
    </Stack>
  );
}
