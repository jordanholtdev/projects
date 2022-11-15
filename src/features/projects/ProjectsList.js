import { useSelector, useDispatch } from 'react-redux';
import {
    getProjectsLoadingStatus,
    fetchProjects,
    selectAllProjects,
    fetchTags,
} from './projectsSlice';
import { SimpleGrid, Image, Box, Heading, Tag, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import ProjectTags from './ProjectTags';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
        dispatch(fetchTags());
    }, [dispatch]);

    const projects = useSelector(selectAllProjects);
    const projectsLoadingStatus = useSelector(getProjectsLoadingStatus);

    let content;
    if (projectsLoadingStatus === 'pending') {
        content = <p>Loading...</p>;
    } else if (projectsLoadingStatus === 'succeeded') {
        content = (
            <>
                <Box py={10}>
                    <ProjectTags />
                </Box>
                <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                    {projects.map((project) => (
                        <Box key={project.fields.projectTitle}>
                            <Link
                                to={`/projects/${project.fields.projectSlug}`}
                                state={project}
                            >
                                <Image
                                    borderRadius='md'
                                    src={
                                        project.fields.coverImage.fields.file
                                            .url
                                    }
                                />
                            </Link>
                            <HStack pt='1rem' spacing='24px'>
                                {project.fields.projectTags
                                    .slice(0, 4)
                                    .map((tag) => (
                                        <Tag
                                            key={tag.fields.name}
                                            variant='outline'
                                            colorScheme='blue'
                                            size='sm'
                                        >
                                            {tag.fields.name}
                                        </Tag>
                                    ))}
                            </HStack>
                            <Heading as='h2' size='md' pt='1.125rem'>
                                {project.fields.projectTitle}
                            </Heading>
                        </Box>
                    ))}
                </SimpleGrid>
            </>
        );
    } else if (projectsLoadingStatus === 'failed') {
        content = <p>failed..</p>;
    }

    return (
        <Box maxW='1024px' px={10} pt={10} as='section'>
            {content}
        </Box>
    );
};

export default ProjectsList;
