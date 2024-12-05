import { ChevronDownIcon, TrophyIcon } from 'lucide-react'

const Chess = () => {
    return (
        <div className="min-h-screen bg-[#020817]">
      {/* Cover Section */}
    
    <div className="hero min-h-screen "
        style={{
        backgroundImage: "url(https://uwcrcn.no/wp-content/uploads/2015/02/051.jpg)",
        }}>
    <div className="hero-overlay bg-opacity-60 backdrop-blur-md"></div>
        <div className="hero-content text-white text-center">
            <div className="max-w-4xl">

                <h1 className="pb-2 text-5xl md:text-7xl font-extrabold mb-4 text-gradient">
                Chess
                  </h1>
                  
                  <p className="text-white text-xl md:text-2xl mb-2">
                  Showcase your skills in this knockout competition on December 10 and compete for the title of Chess Champion!
                  </p>
                  
                  <p className="text-white text-lg mb-4">
                    December 10-11, 2024 | Tejgaon College Campus
                  </p>

                  {/* Prize Pool */}
                  <div className="text-gradient text-2xl md:text-3xl font-bold mb-6">
                    Total Prize Pool: ৳5,000
                  </div>
                <button
                    onClick={() => window.open('https://docs.google.com/forms/d/1h9CSdhBRV_Z9zCYHXx-pwSXibHUnMk6KsiUeBzJBJgM/edit?usp=drivesdk', '_blank')}   
                    className="bg-gradient-logo text-white hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
                        >Register Now
                </button>
            </div>
        </div>
    </div>
    
      {/* Event Description */}
      <section className="py-16 bg-[#020817]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">About the Event</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-white mb-4">
            Test your strategic prowess at the Tejgaon College CSE Fest 2024 - Chess Tournament! Open to all chess enthusiasts, this knockout-style competition will put your tactical skills and mental agility to the test. Each match will be a battle of wits, with only the victor advancing to the next round.
            The tournament will culminate in a nail-biting final, where the two best players will compete for the championship title. Whether you’re a seasoned player or a passionate beginner, join us on December 10, 2024, and take on challengers from all backgrounds for a chance to claim your place as the CSE Fest 2024 Chess Champion!

            </p>
          </div>
        </div>
      </section>
    
      {/* Timeline */}
      <section id="schedule" className="py-16 bg-[#020817] ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Event Schedule</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <div className="bg-[#000F1B] text-gray-300 text-center py-3 rounded-t-lg">
              <h3 className="text-xl font-semibold">Tuesday, December 10, 2024 - Day 1</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-400">
                <thead>
                  <tr>
                    <th className="text-gradient px-4 py-2 text-left">Start</th>
                    <th className="text-gradient px-4 py-2 text-left">End</th>
                    <th className="text-gradient px-4 py-2 text-left">Description</th>
                    <th className="text-gradient px-4 py-2 text-left">Location</th>
                    <th className="text-gradient px-4 py-2 text-left">Date</th>0
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#000F1B]">
                  <td className="px-4 py-3">16 Nov</td>
                      <td className="px-4 py-3">27 Nov</td>
                      <td className="px-4 py-3">Registration</td>
                      <td className="px-4 py-3">Online</td>
                      <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="bg-[#0A0B0F]">
                  <td className="px-4 py-3">10:00 AM</td>
                      <td className="px-4 py-3">04:00 PM</td>
                      <td className="px-4 py-3">Chess Matches</td>
                      <td className="px-4 py-3">Auditorium-1, Tejgaon College</td>
                      <td className="px-4 py-3">December 11</td>
                  </tr>
                  <tr className="bg-[#000F1B]">
                  <td className="px-4 py-3">03:00 PM</td>
                      <td className="px-4 py-3">06:00 PM</td>
                      <td className="px-4 py-3">Prize Giving & Closing Ceremony</td>
                      <td className="px-4 py-3">Auditorium-1, Tejgaon College</td>
                      <td className="px-4 py-3">December 11</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </section>
    
      {/* Prize Money Section */}
      <section className="py-16 bg-[#020817]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Prize Money</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { place: "1st", prize: "৳3000", color: "from-yellow-400 to-yellow-600" },
                { place: "2nd", prize: "৳2000", color: "from-gray-400 to-gray-600" }
              ].map((item, index) => (
                <div key={index} className={`bg-gradient-to-r ${item.color} rounded-lg p-6 text-white text-center shadow-lg`}>
                  <TrophyIcon className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.place} Place</h3>
                  <p className="text-3xl font-extrabold">{item.prize}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-gray-600">
              Additional prizes and certificates will be awarded to outstanding participants.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-logo text-textColor2">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join the Excitement?</h2>
        <p className="text-xl mb-8">Don't miss out on this amazing opportunity to showcase your skills and have fun!</p>
        <button
          onClick={() => window.location.href = 'https://docs.google.com/forms/d/1h9CSdhBRV_Z9zCYHXx-pwSXibHUnMk6KsiUeBzJBJgM/edit?usp=drivesdk'}
          className="text-textColor2 bg-gradient-logo  font-bold py-2 px-4 rounded-lg "
        >
          Register Now
        </button>
      </div>
    </section>
    </div>
    );
    };

export default Chess;