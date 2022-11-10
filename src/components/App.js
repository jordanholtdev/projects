import { Heading } from '@chakra-ui/react';
import Container from './Container';
import DarkModeButton from './DarkModeButton';

function App() {
    return (
        <Container>
            <header>
                <Heading>Projects test</Heading>
                <DarkModeButton>Toggle</DarkModeButton>
            </header>
        </Container>
    );
}

export default App;
