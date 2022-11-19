import { useSelector, useDispatch } from 'react-redux';
import {
    getProjectsLoadingStatus,
    fetchProjects,
    selectAllProjects,
    fetchTags,
} from './projectsSlice';
import { motion } from 'framer-motion';
import { renderDate } from '../../utils/helper';
import {
    SimpleGrid,
    Image,
    Box,
    Heading,
    Tag,
    Text,
    HStack,
    CircularProgress,
    Flex,
    Center,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import ProjectTags from './ProjectTags';
import Loading from '../../components/Loading';
import { Link as RouterLink } from 'react-router-dom';

const ProjectsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
        dispatch(fetchTags());
    }, [dispatch]);

    const projects = useSelector(selectAllProjects);
    const projectsLoadingStatus = useSelector(getProjectsLoadingStatus);
    const tagColor = ['blue.500', 'purple.500', 'yellow.500', 'brand.green'];
    const border = useColorModeValue('1px', 'none');

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
                <Flex flexDirection={['column', 'row']}>
                    <Box mr={[5, 10, 20]}>
                        <ProjectTags />
                    </Box>
                    <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                        {projects.map((project) => (
                            <Box key={project.fields.projectTitle}>
                                <Link
                                    as={RouterLink}
                                    to={`/projects/${project.fields.projectSlug}`}
                                    state={project}
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        as={motion.div}
                                        whileHover={{ scale: 1.055 }}
                                    >
                                        <Image
                                            border={border}
                                            borderColor='gray.200'
                                            borderRadius='md'
                                            src={
                                                project.fields.coverImage.fields
                                                    .file.url
                                            }
                                            fallback={<Loading />}
                                        />
                                    </Box>
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
                                    <Flex alignItems='baseline'>
                                        <Heading as='h2' size='md'>
                                            {project.fields.projectTitle}
                                        </Heading>
                                        <Text fontSize='sm' pl={2}>
                                            •{' '}
                                            {renderDate(
                                                project.fields.projectDate
                                            )}
                                        </Text>
                                    </Flex>
                                </Link>
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
        <Box maxW='1280px' px={10} pt={10} as='section'>
            {content}
        </Box>
    );
};

export default ProjectsList;
