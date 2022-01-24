import { useEffect, useState } from "react";

type CoolTextProps = {
  children: string;
  speed?: number;
  delay?: number;
}
const CoolText = (props: CoolTextProps) => {
  const chars = props.children.split("");
  const [index, setIndex] = useState(0);
  if(typeof props.children !== "string") {
    console.error("CoolText.tsx: children prop must be a string.");
  }
  useEffect(() => {
    const ms = (props.speed || 300) / chars.length;
    let timedout = true;
    const intervalFunction = () => {
      if(timedout) return;
      if(index < chars.length) {
        setIndex(index => index + 1);
      } else {
        clearInterval(interval);
      }
    }
    const timeout = setTimeout(() => {timedout = false}, props.delay || 0);
    const interval = setInterval(intervalFunction, ms);
    return () => {
      clearInterval(interval);
      clearInterval(timeout);
      setIndex(0);
    }
  }, []);
  const $spans = chars.map((char, i) => {
    return (
      <span key={i} className={`
      font-mono text-3xl
      transition-all duration-200 ease-in-out
       ${i < index ?
       "text-light" :
       "text-transparent"}`}>
        {char}
      </span>
    );
  });
  return (
    <div>

      {$spans}
    </div>
  )
}
export default CoolText;
