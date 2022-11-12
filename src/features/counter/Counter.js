import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { Button } from '@chakra-ui/react';

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <Button onClick={() => dispatch(increment())}>Increment</Button>
                <span>{count}</span>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            </div>
        </div>
    );
}

export default Counter;
