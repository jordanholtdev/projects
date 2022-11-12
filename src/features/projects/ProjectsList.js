import { useSelector } from 'react-redux';
import { selectAllProjects, getProjectsLoadingStatus } from './projectsSlice';
import { SimpleGrid, Image, Box, Heading, Tag, HStack } from '@chakra-ui/react';

const ProjectsList = () => {
    const projects = useSelector(selectAllProjects);
    const projectsLoadingStatus = useSelector(getProjectsLoadingStatus);

    let content;
    if (projectsLoadingStatus === 'pending') {
        content = <p>Loading...</p>;
    } else if (projectsLoadingStatus === 'succeeded') {
        content = (
            <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                {projects[0].map((project) => (
                    <Box key={project.fields.projectTitle}>
                        <Image
                            borderRadius='md'
                            src={project.fields.coverImage.fields.file.url}
                        />
                        <HStack pt='1rem'>
                            {project.fields.projectTags.map((tag) => (
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
