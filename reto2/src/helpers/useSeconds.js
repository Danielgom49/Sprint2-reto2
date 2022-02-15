import { useEffect, useRef, useState } from 'react'

const useSeconds = (value = 59) => {
    const [seconds, setSeconds] = useState(value);
    let interval = useRef()

    const resultSeconds = () => setSeconds((prev) => prev - 1)

    useEffect(() => {
        if (seconds >= 0) {
            interval.current = setInterval(resultSeconds, 1000)
        }
        else {
            setSeconds(59)
        }
        return () => {
            clearInterval(interval.current)
        }
    }, [seconds])


    return {
        seconds,
    }
}

export default useSeconds