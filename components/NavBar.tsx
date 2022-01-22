import { useEffect, useState } from "react";
import Nav from "./Nav";

const Navbar = () => {
  const [page, setPage] = useState("/");
  const handleClick = (page: string) => {
    setPage(page);
  };
  return (
    <div className="w-full bg-secondary h-16 p-4 flex justify-center text-sm z-10 sticky top-0">
      <div className="md:w-2/5 grid grid-cols-6 gap-2">
        <Nav href="/" onClick={handleClick} active={page === "/"} title={"Home"}/>
        <Nav href="/projects" onClick={handleClick} active={page === "/projects"} title={"Projects"}/>
        <Nav href="/about" onClick={handleClick} active={page === "/about"} title={"About"}/>
        <Nav href="/contact" onClick={handleClick} active={page === "/contact"} title={"Contact"}/>
        <Nav simple={true} href="https://www.linkedin.com/in/humbertovnavarro/" title={"LinkedIn"}/>
        <Nav simple={true} href="https://github.com/humbertovnavarro" title={"Github"}/>
      </div>
    </div>
  )
}
export default Navbar;
