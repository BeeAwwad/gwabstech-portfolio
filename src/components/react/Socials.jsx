import { Icon } from "@iconify/react/dist/iconify.js"
const Socials = () => {
  const links = [
    {
      name: "linkedin",
      icon: "mdi:linkedin",
      link: "https://www.linkedin.com/in/abubakar-gwabare/",
    },
    {
      name: "github",
      icon: "mdi:github",
      link: "https://github.com/gwabstech",
    },
    {
      name: "facebook",
      icon: "mdi:facebook",
      link: "https://www.facebook.com/abubakar.gwabare",
    },
    {
      name: "gmail",
      icon: "mdi:gmail",
      link: "mailto:gwabstech@gmail.com",
    },
  ]
  return (
    <div className="flex w-fit mx-auto gap-2">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 px-2 rounded-md hover:bg-slate-200 transition-all"
        >
          <Icon icon={link.icon} className="text-2xl" />
        </a>
      ))}
    </div>
  )
}

export default Socials
