import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

// theme colours
const colors = {
    brand: {
        100: '#549ef5',
        900: '#1a202c',
    },
};

// 3. extend the theme
const theme = extendTheme({ config, colors });

export default theme;
