import { useSelector, useDispatch } from 'react-redux';
import {
    getProjectsLoadingStatus,
    fetchProjectsByTag,
    selectTags,
} from './projectsSlice';
import { Button, useColorModeValue, VStack } from '@chakra-ui/react';

const ProjectTags = () => {
    const dispatch = useDispatch();
    const tags = useSelector(selectTags);
    const projectsLoadingStatus = useSelector(getProjectsLoadingStatus);
    const hover = useColorModeValue('yellow.100', 'yellow.600');

    let content;

    if (projectsLoadingStatus === 'pending') {
        content = <p>Loading...</p>;
    } else if (projectsLoadingStatus === 'succeeded') {
        content = (
            <div>
                <VStack alignItems='flex-start'>
                    <Button
                        variant='primary'
                        size='sm'
                        onClick={() => dispatch(fetchProjectsByTag(''))}
                    >
                        All
                    </Button>
                    {tags.map((tag) => (
                        <Button
                            variant='outline'
                            _hover={{
                                borderColor: 'brand.yellow',
                                bg: hover,
                            }}
                            size='sm'
                            key={tag.sys.id}
                            onClick={() =>
                                dispatch(fetchProjectsByTag(tag.fields.name))
                            }
                        >
                            {tag.fields.name}
                        </Button>
                    ))}
                </VStack>
            </div>
        );
    } else if (projectsLoadingStatus === 'failed') {
        content = <p>failed...</p>;
    }

    return <div>{content}</div>;
};

export default ProjectTags;
