import { useSelector, shallowEqual } from 'react-redux';
import { getProjectsLoadingStatus, selectProjectsByTag } from './projectsSlice';
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
import Loading from '../../components/Loading';
import { Link as RouterLink } from 'react-router-dom';

const ProjectsList = () => {
    const projectsLoadingStatus = useSelector(getProjectsLoadingStatus);
    const filterProjects = useSelector(selectProjectsByTag, shallowEqual);
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
                <Flex>
                    <SimpleGrid columns={[1, 1, 2]} spacing={10}>
                        {filterProjects.map((project) => (
                            <Box key={project[1].fields.projectTitle}>
                                <Link
                                    as={RouterLink}
                                    to={`/projects/${project[1].fields.projectSlug}`}
                                    state={project[1]}
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        as={motion.div}
                                        whileHover={{ scale: 1.055 }}
                                    >
                                        <Image
                                            border={border}
                                            borderColor='gray.400'
                                            borderRadius='md'
                                            src={
                                                project[1].fields.coverImage
                                                    .fields.file.url
                                            }
                                            fallback={<Loading />}
                                        />
                                    </Box>
                                    <HStack pt='1rem' spacing='4px'>
                                        {project[1].fields.projectTags
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
                                            {project[1].fields.projectTitle}
                                        </Heading>
                                        <Text fontSize='sm' pl={2}>
                                            •{' '}
                                            {renderDate(
                                                project[1].fields.projectDate
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

    return <Box>{content}</Box>;
};

export default ProjectsList;
