import { Container } from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import WarehousesPage from '../pages/WarehousesPage/WarehousesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Header from './Header/Header';


function App() {
  return (
    <>
      <Header/>
      <Container maxWidth="xl" sx={{paddingY: 2}}>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/warehouses'
            element={<WarehousesPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
