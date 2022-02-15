import { useEffect, useRef, useState } from 'react'
import useSeconds from '../helpers/useSeconds'


const useMinutes = (value = 59) => {

    const { seconds } = useSeconds()

    const [minutes, setMinutes] = useState(value)
    let interval = useRef()

    const resultMinutes = () => setMinutes((prev) => prev - 1)

    useEffect(() => {
        if (seconds === 0) {
            interval.current = setInterval(resultMinutes, 500)
        }
        if (minutes === 0) {
            setMinutes(59)
        }
        return () => {
            clearInterval(interval.current)
        }
    }, [seconds, minutes])


    return {
        minutes
    }
}

export default useMinutes