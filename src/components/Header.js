import { Heading, Flex, Link, Stack, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import DarkModeButton from './DarkModeButton';

function Header() {
    return (
        <Box w='full' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Flex
                p={5}
                w={['100%', '100%', '100%', '100%', '1280px']}
                as='header'
                mx='auto'
                justifyContent='space-between'
            >
                <Box px='2rem' alignItems='center'>
                    <Heading as='h1'>
                        <Link as={RouterLink} to='/'>
                            Jordan Holt - Portfolio
                        </Link>
                    </Heading>
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
        </Box>
    );
}

export default Header;
