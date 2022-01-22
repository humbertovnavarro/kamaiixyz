import { useEffect, useState } from "react";

type CoolTextProps = {
  children: string;
  speed?: number;
}
const CoolText = (props: CoolTextProps) => {
  const chars = props.children.split("");
  const [index, setIndex] = useState(0);
  if(typeof props.children !== "string") {
    console.error("CoolText.tsx: children prop must be a string.");
  }
  useEffect(() => {
    const ms = (props.speed || 300) / chars.length;
    const interval = setInterval(() => {
      if(index < chars.length) {
        setIndex(index => index + 1);
      } else {
        clearInterval(interval);
      }
    }, ms);
    return () => {
      clearInterval(interval);
    }
  }, [chars, index, props.speed]);
  const $spans = chars.map((char, i) => {
    return (
      <span key={i} className={`
      font-mono text-5xl
      transition-all duration-200 ease-in-out
       ${i < index ?
       "text-quaternary" :
       "text-transparent"}`}>
        {char}
      </span>
    );
  });
  return (
    <span>
      {$spans}
    </span>
  )
}
export default CoolText;
