import { Flex, Box, Stack, Divider, Link } from '@chakra-ui/react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <Flex as='footer' pt='4rem' pb='2rem' role='contentinfo' mt='auto'>
            <Stack>
                <Divider borderColor='gray.200' />
                <Box
                    pt={4}
                    fontSize='sm'
                    color='gray.400'
                    textAlign='center'
                    aria-label='copyright information'
                >
                    Copyright © {year} Jordan Holt. All rights reserved.
                </Box>
                <Box pt={4} fontSize='sm' color='gray.500' textAlign='center'>
                    Made with 💖 by Jordan Holt •{' '}
                    <Link
                        isExternal
                        href='https://github.com/jordanholtdev'
                        aria-label='Navigate to Jordan Holt Github Repository'
                    >
                        Github
                    </Link>
                </Box>
            </Stack>
        </Flex>
    );
}

export default Footer;
