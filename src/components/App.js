import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import ProjectsList from '../features/projects/ProjectsList';
import ProjectTags from '../features/projects/ProjectTags';
import { useDispatch } from 'react-redux';
import { fetchProjects, fetchTags } from '../features/projects/projectsSlice';
import { Flex, Box } from '@chakra-ui/react';

function App() {
    const dispatch = useDispatch();
    dispatch(fetchProjects());
    dispatch(fetchTags());
    return (
        <Container>
            <Header />
            <Box maxW='1280px' px={10} pt={10} as='section'>
                <Flex flexDirection={['column', 'row']}>
                    <Box mr={[5, 10, 20]}>
                        <ProjectTags />
                    </Box>
                    <ProjectsList />
                </Flex>
            </Box>
            <Footer />
        </Container>
    );
}

export default App;
