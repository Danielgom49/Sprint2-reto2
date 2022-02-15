import React from 'react'
import Days from '../components/Days'
import Hours from '../components/Hours'
import Minutes from '../components/Minutes'
import Seconds from '../components/Seconds'
import { Background, DivTemp, Fotter } from '../style/StyledCompnonent'


const Temporizador = () => {
    return (
        <div>
            <Background style={{ fontFamily: 'Red Hat Text, sans-serif' }}>
                <h1 style={{ fontWeight: '900' }}>WE'RE LAUNCHING SOON</h1>
                <DivTemp>
                    <Days />
                    <Hours />
                    <Minutes />
                    <Seconds />
                </DivTemp>
            </Background>
            <Fotter>
                <a href="facebook" style={{ padding: '20px' }}><img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1644769359/reto2-sprint2/icon-facebook_ub1txl.svg" alt="facebook" /></a>
                <a href="pinterest" style={{ padding: '20px' }}><img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1644769542/reto2-sprint2/icon-pinterest_aoje4q.svg" alt="pinterest" /></a>
                <a href="instagram" style={{ padding: '20px' }}><img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1644769535/reto2-sprint2/icon-instagram_wwa6ui.svg" alt="instagram" /></a>
            </Fotter>
        </div>
    )
}

export default Temporizador