import clsx from "clsx"
import { useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"

const Navbar = () => {
  const NavLinks = [
    {
      text: "Home",
      link: "/",
      icon: "qlementine-icons:home-16",
    },
    {
      text: "Projects",
      link: "/projects",
      icon: "material-symbols:folder-outline",
    },
    {
      text: "Experience",
      link: "/experience",
      icon: "ph:briefcase",
    },
    {
      text: "Tools",
      link: "/tools",
      icon: "carbon:tools",
    },
    {
      text: "Blogs",
      link: "/blogs",
      icon: "mage:edit",
    },
  ]
  return (
    <nav className="bg-amber-300 py-2">
      <ul className="flex px-5 py-2 gap-3 bg-amber-400 w-fit mx-auto justify-center">
        {NavLinks.map((link, index) => (
          <NavLink key={index + 1} {...link} />
          // <li key={index + 1}>{link.text}</li>
        ))}
      </ul>
    </nav>
  )
}

function NavLink({ link, text, icon }) {
  return (
    <li className="grid place-items-center mx-2">
      <a
        href={`#${link}`}
        className="group p-2 text-center rounded font-bold transition-all relative"
      >
        <Icon icon={icon} className="text-2xl" />
        <span className="absolute text-sm font-normal bg-amber-700 py-1 px-2 text-amber-100 left-1/2 transform -translate-x-1/2 top-full -mt-5 opacity-0 transition-all duration-300 group-hover:mt-0 group-hover:opacity-100">
          {text}
        </span>
      </a>
    </li>
  )
}

export default Navbar
