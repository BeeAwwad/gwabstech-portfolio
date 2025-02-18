import { useEffect, useRef } from "react"

const LazyImage = ({ src, alt, clasName }) => {
  const divRef = useRef(null)

  useEffect(() => {
    const div = divRef.current
    if (!div) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target
          const image = div.querySelector("img")

          const onLoad = () => {
            div.classList.add("loaded")
            div.removeEventListener("load", onLoad)
          }

          image.addEventListener("load", onLoad)
          image.src = `/${src}.png`
          observer.unobserve(div)
        }
      })
    })

    observer.observe(div)

    return () => {
      observer.unobserve(div)
    }
  }, [src])

  return (
    <div
      ref={divRef}
      className={`blur-load w-full relative z-20  bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url('/${src}-small.png')` }}
    >
      <img
        src={"/placeholder.png"}
        alt={alt}
        className={`w-full z-10 object-cover shadow-lg ${clasName}`}
        loading="lazy"
      />
    </div>
  )
}

export default LazyImage
