import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);
