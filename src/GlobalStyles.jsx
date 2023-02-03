import { GlobalStyles as Reset } from '@mui/material';
import 'modern-normalize';

const GlobalStyles = () => {
  return (
    <Reset
      styles={{
        body: { fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif` },
        h1: { margin: 0 },
        h2: { margin: 0 },
        h3: { margin: 0 },
        h4: { margin: 0 },
        h5: { margin: 0 },
        h6: { margin: 0 },
        p: { margin: 0 },
        ul: { margin: 0, padding: 0, listStyle: 'none' },
        ol: { margin: 0, padding: 0, listStyle: 'none' },
      }}
    />
  );
};

export default GlobalStyles;
