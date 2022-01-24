import { useState, useEffect } from "react";
import styles from "./TransitionLayout.module.css";
type TransitionLayoutProps = {
  children: React.ReactNode;
}
export default function TransitionLayout(props: TransitionLayoutProps) {
  const [displayChildren, setDisplayChildren] = useState(props.children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  useEffect(() => {
    setTransitionStage("fadeIn");
    setTimeout(() => {
      window.scrollTo(0, 0);
    },350);
  },[])
  useEffect(() => {
    if (props.children !== displayChildren) setTransitionStage("fadeOut");
  }, [props.children, setDisplayChildren, displayChildren]);
  return (
    <span
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(props.children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
        {...displayChildren}
    >
      {displayChildren}
    </span>

  );
}
