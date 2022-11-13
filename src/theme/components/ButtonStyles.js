import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default defineStyleConfig({
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        primary: (props) => ({
            border: mode('0px', '1px solid')(props),
            bg: mode('yellow.200', 'transparent')(props),
            borderColor: mode('brand.orange', 'brand.green')(props),
            _hover: {
                borderColor: mode('gold.600', 'brand.orange')(props),
                bg: mode('yellow.400', 'transparent')(props),
            },
        }),
    },
    // The default `size` or `variant` values
    defaultProps: {},
});
