import { useEffect, useState } from 'react'

export default function Timer() {
    const [timer, setTimer] = useState<number>(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

  return (
    <p className='fixed bottom-6 left-6 text-4xl font-normal'>
      Time: {
        `${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`
      }
    </p>
  )
}
