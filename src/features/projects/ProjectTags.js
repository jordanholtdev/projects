import { useSelector, useDispatch } from 'react-redux';
import {
    getProjectsLoadingStatus,
    fetchProjectsByTag,
    selectTags,
} from './projectsSlice';
import { Button, Box } from '@chakra-ui/react';

const ProjectTags = () => {
    const dispatch = useDispatch();
    const tags = useSelector(selectTags);
    const projectsLoadingStatus = useSelector(getProjectsLoadingStatus);

    let content;

    if (projectsLoadingStatus === 'pending') {
        content = <p>Loading...</p>;
    } else if (projectsLoadingStatus === 'succeeded') {
        content = (
            <div>
                <Box>
                    <Button
                        variant='primary'
                        size='sm'
                        onClick={() => dispatch(fetchProjectsByTag(''))}
                    >
                        All
                    </Button>
                    {tags.map((tag) => (
                        <Button
                            variant='ghost'
                            size='sm'
                            key={tag.sys.id}
                            onClick={() =>
                                dispatch(fetchProjectsByTag(tag.fields.name))
                            }
                        >
                            {tag.fields.name}
                        </Button>
                    ))}
                </Box>
            </div>
        );
    } else if (projectsLoadingStatus === 'failed') {
        content = <p>failed...</p>;
    }

    return <div>{content}</div>;
};

export default ProjectTags;
