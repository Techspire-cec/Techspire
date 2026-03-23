import { FaLinkedin, FaGithub } from "react-icons/fa";
const ProfileCard = ({ person }) => (
  <div className="bg-gray-800 rounded-xl p-5 text-center w-60 shadow-lg hover:scale-105 transition">
    <img
      src={person.image}
      alt={person.name}
      className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border-2 border-blue-400"
    />
    <h3 className="font-semibold">{person.name}</h3>
    <p className="text-sm text-gray-400">{person.role}</p>

    <div className="flex justify-center gap-3 mt-2 text-lg">
      <a
        href={person.linkedin}
        target="_blank"
        className="hover:text-sky-400 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href={person.github}
        target="_blank"
        className="hover:text-gray-300 transition"
      >
        <FaGithub />
      </a>
    </div>
  </div>
);
export default ProfileCard;
