import { CodeIcon, GamepadIcon, PaletteIcon, BrainIcon,BrainCircuit, BoxIcon, Dices, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import SponsorshipCarousel from './Sponsorship/Sponsor';
import clubLogo from '../assets/logo.png';
import collegeLogo from '../assets/tc logo-03.png'
import bgImage from '../assets/Background.png'
import longLogo from '../assets/LongLogo.svg'

export default function FestMain() {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (event) => {
    if(event === "Hackathon")
      navigate('/hackathon');
    else if(event === "Programming Contest")
      navigate('/programming-contest') // Replace with your desired route
    else if(event === "FIFA 22")
      navigate('/fifa24') // Replace with your desired route
    else if(event === "Poster Design")
      navigate('/poster-design') // Replace with your desired route
    else if(event === "Quiz")
      navigate('/quiz') // Replace with your desired route
    else if(event === "Chess")
      navigate('/chess')
    else if(event === "Indoor Games")
      navigate('/indoor-games')
    else if(event === "Visitor")
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSeK7NGOke1TtPiQQ6B884CwVHqSfsEDT2CaChdScilAMhaBIQ/viewform', '_blank'); // Replace with your desired route
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const eventSegments = [
    "Programming Contest",
    "Hackathon",
    "FIFA 22",
    "Chess",
    "Poster Design",
    "Quiz Competition",
    "Indoor Games",
    
  ]

  return (
    <div className="min-h-screen ">
      <main>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${bgImage})`,
        }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* Main Title */}
        <div className='mx-auto mb-10 w-72'>
          <img className=' w-full' src={longLogo} alt="Cse Fest 2K24 Logo" />
        </div>
        
        <p className="text-white text-xl md:text-2xl mb-2">
          Unleash Your Potential in Tech and Gaming
        </p>
        
        <p className="text-white text-4xl mb-4">
          DEC 10 & DEC 11
        </p>

        {/* Prize Pool */}
        <div className="text-gradient text-2xl md:text-3xl font-bold mb-6">
          Total Prize Pool: ৳60,000+ 
        </div>

        {/* Event Segments */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {eventSegments.map((segment, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full text-white"
            >
              {segment}
            </div>
          ))}
        </div>

        {/* Register Button */}
        <button 
          className="bg-gradient-logo  text-textColor2 font-bold py-3 px-8 rounded-lg text-lg mb-8 transition duration-300"
          onClick={handleModalOpen}
        >
          Register Now
        </button>

        

        {/* Logos and Host Information */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="text-center">
            <img 
              src={collegeLogo}
              alt="Tejgaon College Logo" 
              className="w-24 h-24 mb-2  mx-auto"
            />
            <p className="text-white text-sm ">Hosted By</p>
            <p className="text-white font-semibold">Tejgaon College</p>
          </div>
          <div className="text-center">
            <img 
              src={clubLogo}
              alt="Programming Club Logo" 
              className="w-20 h-20 mt-3 mb-3 mx-auto"
            />
            <p className="text-white text-sm">Organized By</p>
            <p className="text-white font-semibold">Programming Club</p>
          </div>
        </div>

       
      </div>
      </div>

      {/* Countdown Timer */}
      <div className='my-16 text-gradient flex flex-col'>
        <h1 className='text-4xl font-bold text-center my-4'>Event Starts In</h1>
        <FlipClockCountdown 
        className='mx-auto' 
        to={new Date('2024-12-10T09:00:00')}
        digitBlockStyle={{ width: window.innerWidth < 768 ? 20 : 50, height: 60, fontSize: 30 }}/>
      </div>

        <SponsorshipCarousel/>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className=" rounded-lg p-6 w-11/12 md:w-1/3 justify-items-center">
              <h2 className="text-2xl font-bold mb-4">Register for Events</h2>
              <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
                <button onClick={() => window.open('https://docs.google.com/forms/d/1JQkYh5NpVtal1Fy7TYQsu0HpJ_-0NSMwnv-cC4Xdtqs/edit?usp=drivesdk', '_blank')}  className="block w-full text-center py-2 btn btn-primary text-white bg-gradient-logo">Hackathon</button>
                <button onClick={() => window.open('https://docs.google.com/forms/d/1nwA-k9LVXMXHuEJvjXeVB1quL5K72kIR-ouoWWfdNZA/edit?usp=drivesdk', '_blank')} className="block w-full text-center py-2 btn btn-primary text-white bg-gradient-logo">Programming Contest</button>
                <button onClick={() => window.open('https://docs.google.com/forms/d/1OUY8f5S9uvtrQ467N5W2vHU8c2UXy-bNtLKTOTjkuGQ/edit?usp=drivesdk', '_blank')}   className="block w-full text-center py-2 btn btn-primary text-white bg-gradient-logo">FIFA 22</button>
                <button onClick={() => window.open('https://docs.google.com/forms/d/1kfEoEl834uziLWx-5D9-xexJ7W0qW1Whx7cMje7OyM4/edit?usp=drivesdk', '_blank')}    className="block w-full text-center py-2 btn btn-primary text-white bg-gradient-logo">Poster Design</button>
                <button onClick={() => window.open('https://docs.google.com/forms/d/1bvdI3PZJbbSLawPL53eGwRTKY30Ho490rqR6CFWwaz8/edit?usp=drivesdk','_blank')}  className="block w-full text-center py-2 btn btn-primary text-white bg-gradient-logo">Quiz</button>
                <button onClick={() => window.open('https://docs.google.com/forms/d/1h9CSdhBRV_Z9zCYHXx-pwSXibHUnMk6KsiUeBzJBJgM/edit?usp=drivesdk', '_blank')} className="block w-full text-center py-2 btn btn-primary text-white bg-gradient-logo">Chess</button>
                <button onClick={() => window.open('https://forms.gle/yWVeFf4s62vJZRhJ6', '_blank')} className="block w-full text-center py-2 btn btn-primary text-white bg-gradient-logo">Indoor Games</button>
                <button onClick={() => window.open('https://forms.gle/yWVeFf4s62vJZRhJ6', '_blank')} className="block w-full text-center py-2 btn btn-primary text-white bg-gradient-logo">Visitor</button>
              </div>
              <button onClick={handleModalClose} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Close</button>
            </div>
          </div>
        )}

      <section id="events" className="py-20  px-10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gradient">Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Hackathon", icon: BoxIcon, day: "Day 1" },
                { name: "Programming Contest", icon: CodeIcon, day: "Day 2" },
                { name: "FIFA 22", icon: GamepadIcon, day: "Day 1" },
                { name: "Poster Design", icon: PaletteIcon, day: "Day 1" },
                { name: "Quiz", icon: BrainIcon, day: "Day 2" },
                { name: "Chess", icon: BrainCircuit, day: "Day 2" },
                { name: "Indoor Games", icon: Dices, day:"Both"},
                { name: "Visitor", icon: Users, day:""}
              ].map((event, index) => (
                <div onClick={()=>handleClick(event.name)} key={index} 
                className="w-full h-[320px] cursor-pointer bg-textColor3 bg-opacity-70 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center">
                  <event.icon className="w-12 h-12 mx-auto mb-4 text-blue-950" />
                  <h3 className="text-xl font-semibold mb-2 text-gradient">{event.name}</h3>
                  <p className="text-gray-300 mb-2">Showcase your skills & <br></br> compete with the best!</p>
                  <p className="text-sm font-medium text-gray-400">{event.day}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section id="schedule" className="py-16 bg-[#020817] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Event Schedule</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Day 1 Schedule */}
            <div>
              <div className="bg-[#000F1B] text-white text-center py-3 rounded-t-lg">
                <h3 className="text-xl font-semibold">Tuesday, December 10, 2024 - Day 1</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-gradient
text-gradient px-4 py-2 text-left">Start</th>
                      <th className="text-gradient
text-gradient px-4 py-2 text-left">End</th>
                      <th className="text-gradient
text-gradient px-4 py-2 text-left">Description</th>
                      <th className="text-gradient
text-gradient px-4 py-2 text-left">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#000F1B]">
                      <td className="px-4 py-3">09:00 AM</td>
                      <td className="px-4 py-3">09:30 AM</td>
                      <td className="px-4 py-3">Arrival & Kit Collection</td>
                      <td className="px-4 py-3">Auditorium-1, Tejgaon College</td>
                    </tr>
                    <tr className="bg-[#0A0B0F]">
                      <td className="px-4 py-3">09:30 AM</td>
                      <td className="px-4 py-3">10:00 AM</td>
                      <td className="px-4 py-3">Opening Ceremony</td>
                      <td className="px-4 py-3">Auditorium-1, Tejgaon College</td>
                    </tr>
                    <tr className="bg-[#000F1B]">
                      <td className="px-4 py-3">10:00 AM</td>
                      <td className="px-4 py-3">06:00 PM</td>
                      <td className="px-4 py-3">Hackathon</td>
                      <td className="px-4 py-3">Auditorium-2, Tejgaon College</td>
                    </tr>
                    <tr className="bg-[#0A0B0F]">
                      <td className="px-4 py-3">11:00 AM</td>
                      <td className="px-4 py-3">04:00 PM</td>
                      <td className="px-4 py-3">Poster Design</td>
                      <td className="px-4 py-3">Dept. of CSE, Tejgaon College</td>
                    </tr>
                    <tr className="bg-[#000F1B]">
                      <td className="px-4 py-3">11:00 AM</td>
                      <td className="px-4 py-3">04:00 PM</td>
                      <td className="px-4 py-3">FIFA 22 Tournament</td>
                      <td className="px-4 py-3">Auditorium-1, Tejgaon College</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Day 2 Schedule */}
            <div>
              <div className="bg-[#000F1B] text-white text-center py-3 rounded-t-lg">
                <h3 className="text-xl font-semibold">Wednesday, December 11, 2024 - Day 2</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-400">
                  <thead>
                    <tr>
                      <th className="text-gradient px-4 py-2 text-left">Start</th>
                      <th className="text-gradient px-4 py-2 text-left">End</th>
                      <th className="text-gradient px-4 py-2 text-left">Description</th>
                      <th className="text-gradient px-4 py-2 text-left">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#000F1B]">
                      <td className="px-4 py-3">09:00 AM</td>
                      <td className="px-4 py-3">10:00 AM</td>
                      <td className="px-4 py-3">Arrival & Kit Collection</td>
                      <td className="px-4 py-3">Auditorium-1, Tejgaon College</td>
                    </tr>
                    <tr className="bg-[#0A0B0F]">
                      <td className="px-4 py-3">10:00 AM</td>
                      <td className="px-4 py-3">01:00 PM</td>
                      <td className="px-4 py-3">Programming Contest</td>
                      <td className="px-4 py-3">Auditorium-1, Tejgaon College</td>
                    </tr>
                    <tr className="bg-[#000F1B]">
                      <td className="px-4 py-3">11:00 AM</td>
                      <td className="px-4 py-3">12:00 PM</td>
                      <td className="px-4 py-3">Quiz Competition</td>
                      <td className="px-4 py-3">Dept of CSE, Tejgaon College</td>
                    </tr>
                    <tr className="bg-[#0A0B0F]">
                      <td className="px-4 py-3">11:00 AM</td>
                      <td className="px-4 py-3">04:00 PM</td>
                      <td className="px-4 py-3">Chess</td>
                      <td className="px-4 py-3">Dept of CSE, Tejgaon College</td>
                    </tr>
                    <tr className="bg-[#000F1B]">
                      <td className="px-4 py-3">03:00 PM</td>
                      <td className="px-4 py-3">05:00 PM</td>
                      <td className="px-4 py-3">Closing Ceremony &<br></br> Prize Distribution</td>
                      <td className="px-4 py-3">Auditorium-1, Tejgaon College</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center text-gradient mt-4">
              <p>* Indoor games are available throughout both days at the Indoor Games Zone</p>
            </div>
          </div>
        </div>
      </section>
      <section id="register" className="py-20 bg-gradient-logo text-textColor2 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join the Excitement?</h2>
        <p className="text-xl mb-8">Don't miss out on this amazing opportunity to showcase your skills and have fun!</p>
        <button
          onClick={handleModalOpen}
          className="text-textColor2 bg-gradient-logo font-bold py-2 px-4 rounded-lg "
        >
          Register Now
        </button>
      </div>
      </section>
      </main>
    </div>
  )
}