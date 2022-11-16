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
            color: mode('brand.black', 'brand.gold')(props),
            _hover: {
                color: mode('gray.600', 'gold.400')(props),
            },
        }),
    },
    // The default `size` or `variant` values
    defaultProps: {},
});
