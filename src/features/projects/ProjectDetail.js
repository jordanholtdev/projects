import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { marked } from 'marked';
import { useLocation } from 'react-router-dom';
import {
    Heading,
    Flex,
    Image,
    Link,
    HStack,
    Stack,
    useColorModeValue,
    SimpleGrid,
    Tag,
    Box,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AiFillGithub } from 'react-icons/ai';

marked.setOptions({
    gfm: true,
    breaks: true,
    smartypants: true,
});

function ProjectDetail() {
    let project = useLocation();
    const hover = useColorModeValue('gray.500', 'yellow.600');
    const color = useColorModeValue('brand.black', 'yellow.400');
    return (
        <Container>
            <Header />
            <Heading>{project.state.fields.projectTitle}</Heading>
            <Link
                isExternal
                href={project.state.fields.projectUrl}
                variant='primary'
            >
                {project.state.fields.projectUrl} <ExternalLinkIcon mx='2px' />
            </Link>
            <Flex
                direction='column'
                alignItems='center'
                justifyContent='flex-start'
                maxW='820px'
                px='2rem'
            >
                <Image
                    py='2rem'
                    borderRadius='md'
                    src={project.state.fields.coverImage.fields.file.url}
                    objectFit='cover'
                />
                <Stack direction={['column', 'row']}>
                    {project.state.fields.projectTags.map((tag) => (
                        <Link href={tag.fields.url}>
                            <Tag
                                _hover={{ color: 'brand.yellow' }}
                                variant='subtle'
                                p={2}
                            >
                                {tag.fields.name}
                            </Tag>
                        </Link>
                    ))}
                </Stack>
                <HStack py='1rem' w='100%'>
                    {project.state.fields.projectGithub.map((git) => (
                        <Link
                            isExternal
                            display='flex'
                            href={git}
                            aria-label={`Navigate to the ${project.state.fields.projectTitle} project Github repository`}
                        >
                            <ExternalLinkIcon
                                color={color}
                                _hover={{ color: hover }}
                                w={7}
                                h={7}
                                as={AiFillGithub}
                            />
                        </Link>
                    ))}
                </HStack>
                <p
                    dangerouslySetInnerHTML={{
                        __html: marked(project.state.fields.projectDescription),
                    }}
                ></p>
            </Flex>
            <Flex maxW='1200px' px='2rem'>
                <SimpleGrid
                    py='2rem'
                    columns={[1, 1, 2]}
                    spacingX='40px'
                    spacingY='20px'
                >
                    {project.state.fields.projectImages.map((image) => (
                        <Box>
                            <Image
                                borderRadius='md'
                                src={image.fields.file.url}
                            />
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
            <Footer />
        </Container>
    );
}

export default ProjectDetail;
