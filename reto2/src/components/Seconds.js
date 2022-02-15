import React from 'react'
import { StyledSeconds, StyledDiv, StyledP } from '../style/StyledCompnonent'
import useSeconds from '../helpers/useSeconds'

const Seconds = () => {

    const { seconds } = useSeconds()

    return (
        <StyledDiv>
            <StyledSeconds>
                <h1 style={{ fontWeight: '900' }}>{seconds}</h1>
            </StyledSeconds>
            <StyledP>SECONDS</StyledP>
        </StyledDiv>
    )
}

export default Seconds