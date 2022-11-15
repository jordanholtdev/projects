import { Flex } from '@chakra-ui/react';

export const Container = (props) => {
    return (
        <Flex
            minH='100vh'
            direction='column'
            alignItems='center'
            justifyContent='flex-start'
            {...props}
        />
    );
};

export default Container;
