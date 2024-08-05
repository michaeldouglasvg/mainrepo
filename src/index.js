import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/theme/ThemeSection';
import { SweetAlertProvider } from './context/alerts/Sweetalert';
import { FormatProvider } from './context/format/FormatContext';
import { FetchApisProvider } from './context/apis/FetchResources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FetchApisProvider>
        <FormatProvider>
          <SweetAlertProvider>
            <App />
          </SweetAlertProvider>
        </FormatProvider>
      </FetchApisProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
