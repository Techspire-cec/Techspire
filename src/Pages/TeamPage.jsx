import { useState } from "react";
import lead1 from "../assets/Images/lead.png";
import dev1 from "../assets/Images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import SlideOnScroll from "../components/ScrollOnScroll";
import ProfileCard from "../components/ProfileCard";
export default function TeamPage() {
  const [activeYear, setActiveYear] = useState("2025");
  const teamData = {
    2025: {
      lead: {
        name: "Bias Bhadra",
        role: "Chairman",
        image: lead1,
      },
      founding: [
        {
          name: "Om Sharma",
          role: "President",
          image: dev1,
          linkedin: "https://www.linkedin.com/in/omsharma2005",
          github: "https://github.com/Epicbracelet221",
        },
        {
          name: "Mihir Mahato",
          role: "Vice President",
          image: dev1,
          linkedin:
            "https://www.linkedin.com/in/mihir-mahato-btech?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/MIHIR-1304",
        },
        {
          name: "Abhay Kumar",
          role: "Event Head",
          image: dev1,
          linkedin:
            "https://www.linkedin.com/in/abhay-kumar-gamedev?utm_source=share_via&utm_content=profile&utm_medium=member_android",
          github: "https://github.com/abhaykrdev",
        },
      ],
      teammembers: [
        {
          name: "Harshit Jaiswal",
          role: "Web Developer",
          image: dev1,
          linkedin: "#",
          github: "#",
        },
        {
          name: "Sonam Singh",
          role: "Web Developer",
          image: dev1,
          linkedin: "#",
          github: "#",
        },
      ],
      members: [
        {
          name: "Harshit Jaiswal",
          role: "Web Developer",
          image: dev1,
        },
        {
          name: "Sonam Singh",
          role: "Web Developer",
          image: dev1,
        },
      ],
    },
    2026: {
      lead: {
        name: "Bias Bhadra",
        role: "Chairman",
        image: lead1,
      },
      founding: [
        {
          name: "Bias Bhadra",
          role: "President",
          image: dev1,
          linkedin: "https://linkedin.com/",
          github: "https://github.com/",
        },
        {
          name: "Person 2",
          role: "Vice President",
          image: dev1,
          linkedin: "#",
          github: "#",
        },
        {
          name: "Person 3",
          role: "Event Head",
          image: dev1,
          linkedin: "#",
          github: "#",
        },
      ],
      teammembers: [
        {
          name: "Harshit Jaiswal",
          role: "Web Developer",
          image: dev1,
          linkedin: "#",
          github: "#",
        },
        {
          name: "Sonam Singh",
          role: "Web Developer",
          image: dev1,
          linkedin: "#",
          github: "#",
        },
      ],
      members: [
        {
          name: "Harshit Jaiswal",
          role: "Web Developer",
          image: dev1,
        },
        {
          name: "Sonam Singh",
          role: "Web Developer",
          image: dev1,
        },
      ],
    },
    // 2027: {},  By this You can Increase the Year Section
  };
  const currentTeam = teamData[activeYear];
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SlideOnScroll>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            TECHSPIRE TEAM
          </h1>
        </SlideOnScroll>
        <SlideOnScroll>
          <p className="text-center text-gray-400 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quidem eos labore, pariatur tempore cupiditate?
          </p>
        </SlideOnScroll>
        <SlideOnScroll>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {Object.keys(teamData).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-full font-semibold transition
                ${
                  activeYear === year
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {year} Team
              </button>
            ))}
          </div>
        </SlideOnScroll>
        <SlideOnScroll direction="right">
          <div className="flex justify-center mb-14">
            <div className="bg-gray-800 rounded-xl p-5 text-center w-60 shadow-lg hover:scale-105 transition">
              <img
                src={currentTeam.lead.image}
                alt={currentTeam.lead.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-bold">{currentTeam.lead.name}</h3>
              <p className="text-blue-400 text-sm mt-1">
                {currentTeam.lead.role}
              </p>
              <div className="flex justify-center mt-1 hover:text-sky-400 hover:scale-120 transition">
                <a
                  href="https://www.linkedin.com/in/bias-bhadra-8b4a6a67/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </SlideOnScroll>
        {/* --------------------------------------------------------Founding */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          Founding Team {activeYear}
        </h2>
        <div className="flex justify-center gap-10 flex-wrap mb-14">
          {currentTeam.founding.map((person, index) => (
            <ProfileCard key={index} person={person} />
          ))}
        </div>
        {/* ------------------------------------------------------------TEAM */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          Team Members {activeYear}
        </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          {currentTeam.teammembers.map((person, index) => (
            <ProfileCard key={index} person={person} />
          ))}
        </div>
        {/* --------------------------------------------------------web */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          Web Team {activeYear}
        </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          {currentTeam.members.map((person, index) => (
            <ProfileCard key={index} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
