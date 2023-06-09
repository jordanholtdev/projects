import Container from './Container';
import Header from './Header';
import React, { useEffect } from 'react';
import Footer from './Footer';
import ProjectsList from '../features/projects/ProjectsList';
import ProjectTags from '../features/projects/ProjectTags';
import { useDispatch, useSelector } from 'react-redux';
import AppLoad from './AppLoad';
import {
    fetchProjects,
    fetchTags,
    getProjectsLoadingStatus,
} from '../features/projects/projectsSlice';

import { Stack, Box } from '@chakra-ui/react';

const App = () => {
    const dispatch = useDispatch();
    const projectsLoadingStatus = useSelector(getProjectsLoadingStatus);

    // Fetch projects and tags if they are not already loaded
    useEffect(() => {
        dispatch(fetchProjects());
        dispatch(fetchTags());
    }, [dispatch]);

    let content;

    // Render loading state if projects are still loading
    if (projectsLoadingStatus === 'pending') {
        return (
            <Container>
                <Header />
                <Box
                    maxW='1280px'
                    px={10}
                    pt={10}
                    as='section'
                    justifyContent='center'
                >
                    <AppLoad />
                </Box>
                <Footer />
            </Container>
        );
    } else if (projectsLoadingStatus === 'succeeded') {
        // Render the app if projects are loaded successfully
        content = (
            <Box maxW='1280px' px={10} pt={10} as='section'>
                <Stack
                    spacing={10}
                    align='flex-start'
                    direction={['column', 'row']}
                    minW='full'
                >
                    <Box pr={[5, 10, 20]}>
                        <ProjectTags />
                    </Box>
                    <Box display='block'>
                        <ProjectsList />
                    </Box>
                </Stack>
            </Box>
        );
    } else if (projectsLoadingStatus === 'failed') {
        content = <p>failed...</p>;
    }
    return (
        <Container>
            <Header />
            {content}
            <Footer />
        </Container>
    );
};

export default App;
