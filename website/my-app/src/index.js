import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import './index.css';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import { ChakraBaseProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ChakraBaseProvider>
        <ChakraProvider theme={theme} >
          <ColorModeScript />
            <App />
          </ChakraProvider>
      </ChakraBaseProvider>
      
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
