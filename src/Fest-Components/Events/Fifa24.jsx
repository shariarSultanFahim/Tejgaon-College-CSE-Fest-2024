import { ChevronDownIcon, TrophyIcon } from 'lucide-react'

const Fifa24 = () => {
  return (
    <div className="min-h-screen bg-[#020817]">
  {/* Cover Section */}

<div className="hero min-h-screen"
    style={{
    backgroundImage: "url(https://pbs.twimg.com/media/FVPNQbOWYAEzDfn?format=jpg&name=4096x4096)",
    }}>
<div className="hero-overlay bg-opacity-60 backdrop-blur-md"></div>
    <div className="hero-content text-white text-center">
        <div className="max-w-4xl">

            <h1 className="pb-2 text-5xl md:text-7xl font-extrabold mb-4 text-gradient">
                    FIFA 22
                  </h1>
                  
                  <p className="text-white text-xl md:text-2xl mb-2">
                  Join the knockout-style showdown on December 10-11, where each match brings you closer to the title of FIFA-2022 champion!
                  </p>
                  
                  <p className="text-white text-lg mb-4">
                    December 10-11, 2024 | Tejgaon College Campus
                  </p>

                  {/* Prize Pool */}
                  <div className="text-gradient text-2xl md:text-3xl font-bold mb-6">
                    Total Prize Pool: ৳13,000
                  </div>
            <button
                onClick={() => window.open('https://docs.google.com/forms/d/1OUY8f5S9uvtrQ467N5W2vHU8c2UXy-bNtLKTOTjkuGQ/edit?usp=drivesdk', '_blank')}   
                className="bg-gradient-logo  text-textColor2 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
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
        Gear up for the ultimate virtual showdown at the Tejgaon College CSE Fest 2024 - FIFA-2022 Tournament! Open to all, this high-stakes competition will be played in a knockout format, where each match is a fast-paced 10 minutes of intense gameplay. Lose, and you’re out—but win, and you’ll advance to the next round in your pursuit of glory!
        The grand finale will be a thrilling best-of-three series, where only the most skilled players will battle it out for the top spot. Bring your A-game, challenge friends and rivals, and show off your skills at Tejgaon College's most exciting e-sports event on December 10-11, 2024. Don't miss your chance to be crowned the FIFA-2022 champion!

        </p>
      </div>
    </div>
  </section>

  {/* Timeline */}
  <section id="schedule" className="py-16 bg-[#020817]">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Event Schedule</h2>
    <div className="max-w-4xl mx-auto space-y-8">
      {/*Timeline */}
      <div>
        <div className="bg-[#000F1B] text-gray-300 text-center py-3 rounded-t-lg">
          <h3 className="text-xl font-semibold text-white">Timeline</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-gray-400">
            <thead>
              <tr>
                <th className="text-gradient px-4 py-2 text-left">Start</th>
                <th className="text-gradient px-4 py-2 text-left">End</th>
                <th className="text-gradient px-4 py-2 text-left">Description</th>
                <th className="text-gradient px-4 py-2 text-left">Location</th>
                <th className="text-gradient px-4 py-2 text-left">Date</th>
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
                <td className="px-4 py-3">11:00 AM</td>
                <td className="px-4 py-3">04:00 PM</td>
                <td className="px-4 py-3">Knock Off Rounds</td>
                <td className="px-4 py-3">Auditorium-1, Tejgaon College</td>
                <td className="px-4 py-3">December 10</td>
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
  <section className="py-16 ">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Prize Money</h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { place: "1st", prize: "৳8000", color: "from-yellow-400 to-yellow-600" },
            { place: "2rd", prize: "৳5000", color: "from-orange-400 to-orange-600" }
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
      onClick={() => window.location.href = 'https://docs.google.com/forms/d/1OUY8f5S9uvtrQ467N5W2vHU8c2UXy-bNtLKTOTjkuGQ/edit?usp=drivesdk'}
      className="text-textColor2 bg-gradient-logo font-bold py-2 px-4 rounded-lg "
    >
      Register Now
    </button>
  </div>
</section>
</div>
);
};

export default Fifa24;