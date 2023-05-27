import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { renderDate } from '../../utils/helper';
import { marked } from 'marked';
import { useLocation } from 'react-router-dom';
import {
    Heading,
    Text,
    Flex,
    Image,
    Link,
    HStack,
    useColorModeValue,
    SimpleGrid,
    Tag,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AiFillGithub } from 'react-icons/ai';
import { useState } from 'react';

marked.setOptions({
    gfm: true,
    breaks: true,
    mangle: false,
    headerIds: false,
});

function ProjectDetail() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalImage, setModalImage] = useState('');
    let project = useLocation();
    const hover = useColorModeValue('gray.500', 'yellow.600');
    const tagHover = useColorModeValue('yellow.100', 'yellow.600');
    const color = useColorModeValue('brand.black', 'yellow.400');
    const border = useColorModeValue('1px', 'none');

    const handleImageClick = (image) => {
        setModalImage(image);
        onOpen();
    };

    return (
        <Container>
            <Header />
            <Heading>{project.state.fields.projectTitle}</Heading>
            <Flex alignItems='baseline' flexDirection={['column', 'row']}>
                <Link
                    isExternal
                    href={project.state.fields.projectUrl}
                    variant='primary'
                >
                    {project.state.fields.projectUrl}{' '}
                    <ExternalLinkIcon mx='2px' />
                </Link>
                <Text fontSize='sm' pl={[0, 2]}>
                    • {renderDate(project.state.fields.projectDate)}
                </Text>
            </Flex>
            <Flex
                direction='column'
                alignItems='center'
                justifyContent='flex-start'
                maxW='820px'
                px='2rem'
            >
                <Box py={5}>
                    <Image
                        border={border}
                        borderRadius='md'
                        borderColor='gray.300'
                        src={project.state.fields.coverImage.fields.file.url}
                    />
                </Box>
                <Box>
                    {project.state.fields.projectTags.map((tag) => (
                        <Link
                            key={tag.fields.url}
                            href={tag.fields.url}
                            mt='5px'
                            mx='5px'
                        >
                            <Tag
                                size='sm'
                                variant='outline'
                                _hover={{
                                    borderColor: 'brand.yellow',
                                    bg: tagHover,
                                }}
                            >
                                {tag.fields.name}
                            </Tag>
                        </Link>
                    ))}
                </Box>
                <HStack py='1rem' w='100%'>
                    {project.state.fields.projectGithub.map((git) => (
                        <Link
                            key={git}
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

            <Flex maxW='1600px' px='2rem'>
                <SimpleGrid
                    py='2rem'
                    columns={[1, 1, 2]}
                    spacingX='40px'
                    spacingY='20px'
                >
                    {project.state.fields.projectImages.map((image) => (
                        <Box key={image.fields.file.url}>
                            <Image
                                border={border}
                                borderRadius='md'
                                borderColor='gray.400'
                                src={image.fields.file.url}
                                _hover={{ cursor: 'pointer' }}
                                onClick={() =>
                                    handleImageClick(image.fields.file.url)
                                }
                            />
                        </Box>
                    ))}
                    <Modal onClose={onClose} isOpen={isOpen} size='full'>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <Image
                                _hover={{ cursor: 'pointer' }}
                                onClick={() => onClose()}
                                src={modalImage}
                            />
                        </ModalContent>
                    </Modal>
                </SimpleGrid>
            </Flex>
            <Footer />
        </Container>
    );
}

export default ProjectDetail;
