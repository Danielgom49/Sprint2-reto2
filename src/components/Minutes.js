import React from 'react'
import { StyledMinutes, StyledDiv, StyledP } from '../style/StyledCompnonent'
import useMinutes from '../helpers/useMinutes'


const Minutes = () => {

    const { minutes } = useMinutes()

    return (
        <StyledDiv>
            <StyledMinutes>
                <h1 style={{ fontWeight: '900' }}>{minutes}</h1>
            </StyledMinutes>
            <StyledP>MINUTES</StyledP>
        </StyledDiv>
    )
}

export default Minutes