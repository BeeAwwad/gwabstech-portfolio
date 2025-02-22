import { Icon } from "@iconify/react/dist/iconify.js"
import React from "react"

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
    <nav className="py-5">
      <ul className="flex px-3 py-1 lg:px-5 rounded-lg lg:py-1.5 gap-1 lg:gap-3 bg-gray-100 w-fit mx-auto justify-center">
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
        href={`${link}`}
        className="group p-2 text-center rounded font-bold transition-all relative"
      >
        <Icon icon={icon} className="text-lg text-black lg:text-xl z-10" />
        <span className="absolute text-xs pointer-events-none font-normal bg-gray-200 py-1 px-2 text-black left-1/2 transform -translate-x-1/2 -top-1 opacity-0 transition-all duration-500 group-hover:top-12 rounded-md group-hover:opacity-100 z-0">
          {text}
        </span>
      </a>
    </li>
  )
}

export default Navbar
