import { useEffect, useRef, useState } from 'react'


const sponsors = [
  { name: "Creative IT", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycNsir_BJsDPozHKRjGPF08ewZERdcJwQqg&s", type: "Powered By", link:'https://www.creativeitinstitute.com/'},

  { name: "Apple Empire", logo: "https://i.ibb.co.com/VYhrcqb/Asset-62x.png", type: "Fifa-Partner", link:'https://appleempirebd.com/?srsltid=AfmBOoq5bbGl5gnrA2-KaLNckobPHPnpRIvwpWr3OS_fybKhJOV7RpU0'},

  { name: "Samakal", logo: "https://i.ibb.co.com/41W7V50/Asset-52x.png", type: "Media Partner",link:'https://samakal.com'},



  
  { name: "Creative IT", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycNsir_BJsDPozHKRjGPF08ewZERdcJwQqg&s", type: "Powered By", link:'https://www.creativeitinstitute.com/'},

  { name: "Apple Empire", logo: "https://i.ibb.co.com/VYhrcqb/Asset-62x.png", type: "Fifa-Partner", link:'https://appleempirebd.com/?srsltid=AfmBOoq5bbGl5gnrA2-KaLNckobPHPnpRIvwpWr3OS_fybKhJOV7RpU0'},

  { name: "Samakal", logo: "https://i.ibb.co.com/41W7V50/Asset-52x.png", type: "Media Partner",link:'https://samakal.com'},

  // { name: "Sponsor Name", logo: "https://www.diabetes.ie/wp-content/uploads/2021/05/logo-Placeholder.jpg", type: "Bronze Sponsor",link:''}
]

export default function SponsorshipCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const carouselRef = useRef()

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollWidth = carousel.scrollWidth
    const clientWidth = carousel.clientWidth

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1
        // const newPosition = prevPosition
        return newPosition > scrollWidth - clientWidth ? 0 : newPosition
      })
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollPosition
    }
  }, [scrollPosition])

  return (
    <section className=" py-16 text-gradient overflow-hidden ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Sponsors & Partners</h2>
        <div 
          ref={carouselRef}
          className="flex overflow-hidden"
          style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem', marginRight: '-1rem' }}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div 
              key={index} 
              className="my-4 flex-shrink-0 w-64 mx-4 bg-textColor3 bg-opacity-70 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 text-center"
              onClick={() => sponsor.link && window.open(sponsor.link, '_blank')}          
              >
              <div className="p-6">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-gray-400 font-semibold text-lg mb-2">{sponsor.name}</h3>
                <p className="text-gray-300">{sponsor.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

