import { MouseEventHandler } from "react";
import Link from "next/link";
import { Router } from "next/router";
type NavProps = {
  href: string;
  title: string;
  icon?: string;
  active?: boolean;
  simple?: boolean;
  onClick?: (page: string) => void;
}
const baseClassName = `
  w-full flex items-center justify-center
  h-full text-center
  transition-all duration-500 ease-in-out
  border-2
  rounded-md
  active:translate-y-px
  hover:border-quaternary
  border-secondary
`;
const activeClassName = `
  border-quaternary
  bg-tertiary
`;
const Nav = (props: NavProps) => {
  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    if(props.simple) {
      window.open(props.href, "_blank");
      return;
    }
    if(props.onClick) {
      props.onClick(props.href);
    } else {
      console.error("Nav.tsx: onClick prop is required when simple is false.");
    }
  }
  let className = baseClassName;
  className += props.active ? activeClassName : "";
  const anchorProp = (
    <a className={className}>
      {props.icon && <i className={`fas fa-${props.icon} mr-2`}></i>}
      <span className={props.icon && "sm:hidden"}>{props.title}</span>
    </a>
  )
  return (
    <span onClick={handleClick}>
      {!props.simple ? (
        <Link href={props.href}>
          {anchorProp}
        </Link>
        ) : (
          anchorProp
        )
      }
    </span>
  )
}
export default Nav;
