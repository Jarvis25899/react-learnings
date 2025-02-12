import { StrictMode, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // createElement(StrictMode, null, createElement(App))
  <StrictMode>
    <App />
  </StrictMode>
);
