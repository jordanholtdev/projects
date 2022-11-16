import { Skeleton, Stack } from '@chakra-ui/react';

const Loading = () => {
    return (
        <Stack>
            <Skeleton
                height='200px'
                startColor='gray.200'
                endColor='gray.400'
            />
        </Stack>
    );
};

export default Loading;
