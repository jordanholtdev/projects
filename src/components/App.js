import { ChakraProvider } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import theme from '../theme';
import Container from './Container';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Container>
                <header>
                    <Heading color='brand.100'>Projects test</Heading>
                </header>
            </Container>
        </ChakraProvider>
    );
}

export default App;
