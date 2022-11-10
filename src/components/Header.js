import { Heading, Flex, Link, Stack, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AiFillGithub } from 'react-icons/ai';
import DarkModeButton from './DarkModeButton';

function Header() {
    return (
        <Flex
            paddingY='2rem'
            w='100%'
            maxW='50rem'
            as='header'
            alignItems='center'
            justifyContent='center'
        >
            <Box px='2rem' alignItems='center'>
                <Heading as='h1'>Projects</Heading>
            </Box>
            <Stack direction='row' spacing={4} alignItems='center'>
                <Link
                    isExternal
                    display='flex'
                    href='https://github.com/jordanholtdev'
                    aria-label='Navigate to Jordan Holt Github Repository'
                >
                    <ExternalLinkIcon
                        color='gray.400'
                        _hover={{ color: 'gray.600' }}
                        w={7}
                        h={7}
                        as={AiFillGithub}
                    />
                </Link>
                <DarkModeButton>Toggle</DarkModeButton>
            </Stack>
        </Flex>
    );
}

export default Header;
