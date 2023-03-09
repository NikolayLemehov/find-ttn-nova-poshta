import {Box, Stack, styled} from '@mui/material';

export const HistoryBox = styled(Box)(({ theme }) => ({
  width: 400,
  [theme.breakpoints.down('md')]: {
    width: 250,
  },
}));

export const HistoryStack = styled(Stack)(({ theme }) => ({
  direction: 'row',
  [theme.breakpoints.down('md')]: {
    direction: 'column',
  },
}));
