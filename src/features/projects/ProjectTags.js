import { useSelector, useDispatch } from 'react-redux';
import {
    getProjectsLoadingStatus,
    selectTags,
    updateSelectedTag,
} from './projectsSlice';
import { Button, useColorModeValue, Stack } from '@chakra-ui/react';

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
                <Stack
                    w='full'
                    alignItems='flex-start'
                    direction={['row', 'column']}
                    wrap='wrap'
                    pb={[2, 1, 0]}
                    spacing={[0, 2, 2]}
                >
                    <Button
                        variant='outline'
                        _hover={{
                            borderColor: 'brand.yellow',
                            bg: hover,
                        }}
                        size='sm'
                        onClick={() => dispatch(updateSelectedTag('git'))}
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
                                dispatch(updateSelectedTag(tag.fields.name))
                            }
                        >
                            {tag.fields.name}
                        </Button>
                    ))}
                </Stack>
            </div>
        );
    } else if (projectsLoadingStatus === 'failed') {
        content = <p>failed...</p>;
    }

    return <div>{content}</div>;
};

export default ProjectTags;
