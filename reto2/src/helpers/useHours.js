import { useEffect, useRef, useState } from 'react'
import useMinutes from '../helpers/useMinutes'


const useHours = (value = 24) => {
    const { minutes } = useMinutes()

    const [hours, setHours] = useState(value)
    let interval = useRef()

    const resultHours = () => setHours((prev) => prev - 1)

    useEffect(() => {
        if (minutes === 0) {
            resultHours()
        }
        if (hours === 0) {
            setHours(24)
        }
        return () => {
            clearInterval(interval.current)
        }
    }, [hours, minutes])

    return {
        hours
    }
}

export default useHours