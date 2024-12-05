import { Trophy, Users, Clock, Gift } from 'lucide-react'

const indoorGames = [
  { name: "Chess", icon: "♟️" },
  { name: "Dart Board", icon: "🎯" },
  { name: "Rubik's Cube", icon: "🧩" },
  { name: "Bucket Ball", icon: "🏀" }
]

export default function IndoorGames() {


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      

      <div className="hero min-h-screen"
        style={{
        backgroundImage: "url(https://i.ytimg.com/vi/jkAPl1tue4A/maxresdefault.jpg)",
        }}>
    <div className="hero-overlay bg-opacity-60 backdrop-blur-md"></div>
        <div className="hero-content text-white text-center">
            <div className="max-w-4xl">

                <h1 className="pb-2 text-5xl md:text-7xl font-extrabold mb-4 text-gradient">
                Indoor Games
                  </h1>
                  
                  <p className="text-white text-xl md:text-2xl mb-2">
                  Unleash Your Competitive Spirit!
                  </p>
                  
                  <p className="text-white text-lg mb-4">
                  December 10-11, 2024 | Tejgaon College Campus
                  </p>

                  {/* Prize Pool */}
                  <div className="text-gradient text-2xl md:text-3xl font-bold mb-6">
                    Win Excting Prizes
                  </div>
                  <button
            onClick={() => window.open('https://forms.gle/yWVeFf4s62vJZRhJ6', '_blank')}
            className="bg-gradient-logo  text-textColor2 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Register as Visitor
          </button>
            </div>
        </div>
    </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 bg-[#020817]">
        {/* Key Features */}
        <section className="mb-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-textColor3 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Users className="text-blue-900 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open to All</h3>
              <p>Both participants and visitors can join the fun!</p>
            </div>
            <div className="bg-textColor3 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Gift className="text-green-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Participation</h3>
              <p>No cost to join any of the indoor games.</p>
            </div>
            <div className="bg-textColor3 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Clock className="text-orange-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Pre-registration</h3>
              <p>Just show up and play! No advance sign-up needed.</p>
            </div>
            <div className="bg-textColor3 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Trophy className="text-yellow-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exciting Prizes</h3>
              <p>Win amazing rewards for your skills!</p>
            </div>
          </div>
        </section>

        {/* Available Games */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Available Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {indoorGames.map((game, index) => (
              <div key={index} className="bg-textColor3 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{game.icon}</div>
                <h3 className="text-xl font-semibold">{game.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

    
    </div>
  )
}