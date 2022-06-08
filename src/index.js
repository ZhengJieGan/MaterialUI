import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
	palette: {
		background: {
			primary: "#2196f3",
      secondary: "#f50057",
      tertiary: "#ea80fc"
		},
		text: {
			primary: "#173A5E",
			secondary: "#46505A",
		},
		action: {
			active: "#001E3C",
		},
		success: {
			dark: "#009688",
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);

