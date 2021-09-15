import React from 'react';
import { Container, Screen, Previous, Current } from './Styled';

const Calculator = () => {
    return ( 
        <Container>
            <Screen>
                <Previous>10 +</Previous>
                <Current>10</Current>
            </Screen>
        </Container>
    );
};
 
export default Calculator;