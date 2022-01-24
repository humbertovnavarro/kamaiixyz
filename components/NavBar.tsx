import {  useState } from "react";
import Nav from "./Nav";
import { useRouter } from "next/router";
import lnIcon from "../public/images/ln.png";

const Navbar = () => {
  const router = useRouter();
  const page = router.pathname;
  return (
    <div className="w-full bg-secondary h-16 p-4 flex justify-center text-sm z-10 sticky top-0 rounded-lg">
      <div className="md:w-2/5 grid grid-cols-6 gap-2">
        <Nav href="/" active={page === "/"} title={"Home"}/>
        <Nav href="/projects" active={page === "/projects"} title={"Projects"}/>
        <Nav href="/about" active={page === "/about"} title={"About"}/>
        <Nav href="/contact" active={page === "/contact"} title={"Contact"}/>
        <Nav icon={lnIcon} simple={true} href="https://www.linkedin.com/in/humbertovnavarro/" title={"LinkedIn"}/>
        <Nav simple={true} href="https://github.com/humbertovnavarro" title={"Github"}/>
      </div>
    </div>
  )
}
export default Navbar;
