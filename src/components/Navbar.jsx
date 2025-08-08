import { Instagram, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navlinks = [
  { name: "About Us", path: "/" },
  { name: "Our Work", path: "/" },
  { name: "Our World", path: "/" },
]

export default function Navbar() {
  return (
    <nav className="h-16 px-4 container mx-auto flex justify-between items-center font-BebasNeue text-xl tracking-wider">
      <div className="flex flex-col items-center justify-center gap-2 lg:hidden">
        <div className="w-8 h-px bg-white" />
        <div className="w-8 h-px bg-white" />
      </div>
      <div className="hidden lg:flex items-center gap-2 tracking-tight">

        {Navlinks.map((link) => (
          <Link className="hover:text-accent" key={link.name} to={link.path}>
            {link.name}
          </Link>
        ))}

      </div>
      <p className="hover:text-accent">logo</p>

      <div className="lg:hidden">
        <Instagram />
      </div>
      <Link className="hover:text-accent hidden lg:block" to={"/"}>Contact Us</Link>
    </nav>
  );
}
