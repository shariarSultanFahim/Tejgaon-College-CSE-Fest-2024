const sponsors = [
  { name: "Creative IT", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycNsir_BJsDPozHKRjGPF08ewZERdcJwQqg&s", type: "Powered By", link:'https://www.creativeitinstitute.com/'},

  { name: "Apple Empire", logo: "https://i.ibb.co.com/VYhrcqb/Asset-62x.png", type: "Fifa-Partner", link:'https://appleempirebd.com/?srsltid=AfmBOoq5bbGl5gnrA2-KaLNckobPHPnpRIvwpWr3OS_fybKhJOV7RpU0'},

  { name: "Samakal", logo: "https://i.ibb.co.com/41W7V50/Asset-52x.png", type: "Media Partner",link:'https://samakal.com'},

  // { name: "Sponsor Name", logo: "https://www.diabetes.ie/wp-content/uploads/2021/05/logo-Placeholder.jpg", type: "Bronze Sponsor",link:''}
]

export default function FooterSponsors() {
  return (
    <div className="bg-[#020817] py-8 mb-16 w-full">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold mt-6 mb-12 text-center text-gradient mx-auto">Our Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-40">
          {sponsors.map((sponsor, index) => (
            <div key={index} 
            className="w-[150px] h-[150px] flex flex-col items-center justify-center mx-auto p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-textColor3 bg-opacity-70"
            onClick={() => sponsor.link && window.open(sponsor.link, '_blank')}
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="w-full h-16 object-contain mb-2"
              />
              <p className="text-xs text-gray-300 text-center">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}