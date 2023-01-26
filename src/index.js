import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from 'redux/store';

import App from 'components/App';

import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import GlobalStyle from 'components/GlobalStyle';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
            <GlobalStyle />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
