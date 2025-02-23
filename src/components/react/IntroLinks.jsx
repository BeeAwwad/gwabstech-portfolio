import { Icon } from "@iconify/react/dist/iconify.js"
import React from "react"

const IntroLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto gap-4">
      <div className="bg-red-900 rounded-xl flex flex-col justify-between p-5 xl:col-span-3 space-y-5 text-[#eee]">
        <Icon className="text-5xl" icon={"ph:briefcase"} />
        <div className="flex flex-col gap-5">
          <p className="text-2xl max-w-96">
            Here are all the organizations I've worked
          </p>
          <a
            href="/experience"
            className="p-1.5 hover:bg-[#eee] hover:text-red-900 transition-colors border-2 border-[#eee] w-fit ml-auto"
          >
            <Icon className="text-2xl" icon={"basil:arrow-right-solid"} />
          </a>
        </div>
      </div>
      <div className="bg-[#76ABAE] rounded-xl flex flex-col justify-between p-5 xl:col-span-4 space-y-5 text-black">
        <Icon className="text-5xl" icon={"material-symbols:folder-outline"} />
        <div className="flex flex-col gap-5">
          <p className="text-2xl max-w-80">
            Here are all my completed projects
          </p>
          <a
            href="/projects"
            className="p-1.5 border-2 hover:bg-black hover:text-[#eee] transition-colors w-fit ml-auto border-black"
          >
            <Icon className="text-2xl" icon={"basil:arrow-right-solid"} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default IntroLinks
