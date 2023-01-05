import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
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
          <App />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
