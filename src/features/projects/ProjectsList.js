import { useSelector, useDispatch } from 'react-redux';
import {
    getProjectsLoadingStatus,
    fetchProjects,
    selectAllProjects,
    fetchTags,
} from './projectsSlice';
import {
    SimpleGrid,
    Image,
    Box,
    Heading,
    Tag,
    HStack,
    CircularProgress,
    Flex,
    Center,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import ProjectTags from './ProjectTags';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
        dispatch(fetchTags());
    }, [dispatch]);

    const projects = useSelector(selectAllProjects);
    const projectsLoadingStatus = useSelector(getProjectsLoadingStatus);
    const tagColor = ['blue.500', 'purple.500', 'yellow.500', 'brand.green'];

    let content;
    if (projectsLoadingStatus === 'pending') {
        content = (
            <Flex justify='center' h='75vh'>
                <Center>
                    <CircularProgress h='100%' />
                </Center>
            </Flex>
        );
    } else if (projectsLoadingStatus === 'succeeded') {
        content = (
            <>
                <Flex>
                    <Box mr={[5, 10, 20]}>
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
                                            project.fields.coverImage.fields
                                                .file.url
                                        }
                                        fallback={<Loading />}
                                    />
                                </Link>
                                <HStack pt='1rem' spacing='4px'>
                                    {project.fields.projectTags
                                        .slice(0, 4)
                                        .map((tag, i) => (
                                            <Tag
                                                key={tag.fields.name}
                                                variant='ghost'
                                                size='sm'
                                                color={tagColor[i]}
                                            >
                                                {tag.fields.name}
                                            </Tag>
                                        ))}
                                </HStack>
                                <Heading as='h2' size='md'>
                                    {project.fields.projectTitle}
                                </Heading>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Flex>
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
