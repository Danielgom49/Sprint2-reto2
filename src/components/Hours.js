import React from 'react'
import { StyledHour, StyledDiv, StyledP } from '../style/StyledCompnonent'
import useHours from '../helpers/useHours'


const Hours = () => {

    const { hours } = useHours()

    return (
        <StyledDiv>
            <StyledHour>
                <h1 style={{ fontWeight: '900' }}>{hours}</h1>
            </StyledHour>
            <StyledP>HOURS</StyledP>
        </StyledDiv>
    )
}

export default Hours