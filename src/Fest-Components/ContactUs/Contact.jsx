import srabon from '../../assets/Shakhawat Srabon - President .jpg'
import somrat from '../../assets/MD Mizanur Rahman - Secretory .jpg'
import fahim from '../../assets/Shariar- (1).jpg'
import eusouf from '../../assets/Md. Eusouf - Joint Secratory.jpg'


const contactPersons = [
    {
      name: "Saud-Al-Abedin",
      designation: "Mentor",
      title: "Programming Club, Tejgaon College, Dhaka",
      phone: "+880 1681735690",
      image: "https://pctcd.com/_next/image?url=%2Fmentors%2FSaud_Al_Abedin.jpg&w=128&q=75",
    },
    {
      name: "Md. Moklesur Rahman",
      designation: "Mentor",
      title: "Programming Club, Tejgaon College, Dhaka",
      phone: "+880 1717406684",
      image: "https://pctcd.com/_next/image?url=%2Fmentors%2FMd_Moklesur_Rahman.jpg&w=128&q=75",
    },
    {
        name: "Assaduzzaman Noor",
        designation: "Mentor",
        title: "Programming Club, Tejgaon College, Dhaka",
        phone: "+880 1682777666",
        image: "https://pctcd.com/_next/image?url=%2Fmentors%2FMd_Asaduzzaman_Noor.jpg&w=128&q=75",
    },
    {
      name: "Shakhawat Srabon",
      designation: "President",
      title: "Programming Club, Tejgaon College, Dhaka",
      phone: "+880 1869943362",
      image: srabon,
    },
    {
      name: "Md. Mizanur Rahman",
      designation: "Secretary",
      title: "Programming Club, Tejgaon College, Dhaka",
      phone: "+880 1771647438",
      image: somrat,
    },
    {
      name: "Shariar Sultan Fahim",
      designation: "Asst. Technical Co-ordinator",
      title: "Programming Club, Tejgaon College, Dhaka",
      phone: "+880 1560016476",
      image: fahim,
    },
    {
      name: "Riyaj Uddain Eusouf",
      designation: "Joint Secratory",
      title: "Programming Club, Tejgaon College, Dhaka",
      phone: "+880 1723354435",
      image: eusouf,
    },
    
  ];
  

const ContactCard = ({ name, designation, title, phone, image }) => (
  <div className="bg-[#010D1A] rounded-lg shadow-md overflow-hidden text-center ">
    <img src={image} alt={name} className="w-full h-48 object-cover object-center m-auto" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-600 mb-1">{designation}</p>
      <p className="text-gray-500 mb-2">{title}</p>
      <p className="text-blue-600">{phone}</p>
    </div>
  </div>
)

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#020817] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gradient">Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactPersons.map((person, index) => (
            <ContactCard key={index} {...person} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact