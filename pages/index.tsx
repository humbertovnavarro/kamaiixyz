import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
const Home: NextPage = () => {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(!blink);
    }, 1000);
    return () => clearInterval(interval);
  }, [blink]);
  return (
    <h1 className="text-green-400 text-center ">
      Arsene
      <span className={`${blink ? 'visible' : 'invisible'}`}>
        _
      </span>
    </h1>
  )
}

export default Home
