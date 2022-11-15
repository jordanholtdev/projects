import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import App from './components/App';
import ProjectDetail from './features/projects/ProjectDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [<ProjectDetail />],
    },
    {
        path: '/projects/:projectPage',
        element: <ProjectDetail />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);
