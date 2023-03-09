import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {CssBaseline} from '@mui/material';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/find-ttn-nova-poshta">
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

