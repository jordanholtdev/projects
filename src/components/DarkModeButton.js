import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const DarkModeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label={
                colorMode === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
            }
            variant='ghost'
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            size='lg'
        />
    );
};

export default DarkModeButton;
