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
    <div className="flex flex-col justify-center items-center">
      <div className="w-1/2 flex-row justify-center">
        <h1 className="text-green-400 text-center text-6xl my-8">
        Arsene
        <span className={`${blink ? 'visible' : 'invisible'}`}>
          _
        </span>
        </h1>
      </div>
      <div>
        <img src="https://i.pinimg.com/originals/27/91/9f/27919f328b18c3b7f8a34d40b2833b5f.png"></img>
      </div>
      <div className="w-1/2 flex-row justify-center my-2">
        <p className="text-center text-green-400">
          “What a pity that I am not an honest man!”  <span className="font-light">- Arsène Lupin, Gentleman-Thief</span>
        </p>
      </div>
    </div>
  )
}

export default Home
