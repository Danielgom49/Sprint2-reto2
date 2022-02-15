import styled from 'styled-components'

export const Background = styled.div`
    background-color: hsl(235, 16%, 14%);
    background-image: url('https://res.cloudinary.com/dvcxyjkko/image/upload/v1644770631/reto2-sprint2/bg-stars_zjqrco.svg');
    background-position: center;
    color: hsl(0, 0%, 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    height: 236px;
    padding: 100px 10px;
    @media screen and (max-width: 768px) {
        height: 200px;
}
`
export const DivTemp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    margin: 20px 20px;
    @media screen and (max-width: 768px) {
        width: 375px;
        margin: 50px 10px;
        display: flex;
        justify-content:space-evenly;
    }

`
export const Fotter = styled.div`
    background-color:hsl(235, 16%, 14%);
    background-image: url('https://res.cloudinary.com/dvcxyjkko/image/upload/v1644769554/reto2-sprint2/pattern-hills_xbil1c.svg');
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`



// DAYS
export const StyledDay = styled.div`
    background-color:hsl(236, 21%, 26%);
    color:hsl(345, 95%, 68%);
    font-size: 25px;
    width:120px;
    border-radius: 10px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size:13px;
        width: 60px;
}
`
//HOURS
export const StyledHour = styled.div`
    background-color:hsl(236, 21%, 26%);
    color:hsl(345, 95%, 68%);
    font-size: 25px;
    width:120px;
    border-radius: 10px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size:13px;
        width: 60px;
}
`
//MINUTES
export const StyledMinutes = styled.div`
    background-color:hsl(236, 21%, 26%);
    color:hsl(345, 95%, 68%);
    font-size: 25px;
    width:120px;
    border-radius: 10px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size:13px;
        width: 60px;
}
`
//SECONDS
export const StyledSeconds = styled.div`
    background-color:hsl(236, 21%, 26%);
    color:hsl(345, 95%, 68%);
    font-size: 25px;
    width:120px;
    border-radius: 10px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size:13px;
        width: 60px;
}
`




export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    @media screen and (max-width: 768px) {
        margin: 5px;
    }
`
export const StyledP = styled.p`
    font-size: 14px;
    color:hsl(237, 18%, 59%) ;
    letter-spacing:5px;
    @media screen and (max-width: 768px) {
        font-size:10px;
        letter-spacing: 3px;
    }
`
