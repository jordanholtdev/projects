import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import Button from './components/ButtonStyles';

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const fonts = {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    mono: 'Menlo, monospace',
};
// theme colours
const colors = {
    brand: {
        green: '#00A878',
        yellow: '#D8F1A0',
        gold: '#F3C178',
        orange: '#FE5E41',
        black: '#0B0500',
    },
    green: {
        50: '#dafff7',
        100: '#adffe8',
        200: '#7effdb',
        300: '#4dffcc',
        400: '#23ffbd',
        500: '#11e6a4',
        600: '#00b380',
        700: '#00805b',
        800: '#004e36',
        900: '#001c10',
    },
    yellow: {
        50: '#f4fde2',
        100: '#e3f5ba',
        200: '#d1ef90',
        300: '#bfe864',
        400: '#aee23b',
        500: '#94c823',
        600: '#739c1a',
        700: '#526f10',
        800: '#304307',
        900: '#0e1700',
    },
    gold: {
        50: '#fff3e0',
        100: '#fadfb6',
        200: '#f5c98a',
        300: '#f0b45c',
        400: '#eb9e30',
        500: '#d28518',
        600: '#a46711',
        700: '#754a0a',
        800: '#472c03',
        900: '#1b0e00',
    },
    orange: {
        50: '#ffe7e1',
        100: '#ffbeb1',
        200: '#ff937f',
        300: '#fe694d',
        400: '#fd3f1c',
        500: '#e32602',
        600: '#b21c01',
        700: '#801300',
        800: '#4e0900',
        900: '#1f0000',
    },
};

const styles = {
    global: (props) => ({
        body: {
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('#ffffff', '#000000')(props),
        },
    }),
};

// 3. extend the theme
const theme = extendTheme({
    config,
    colors,
    styles,
    fonts,
    components: { Button },
});

export default theme;
