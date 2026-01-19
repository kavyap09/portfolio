import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Wanderlust",
    tech: "MERN Stack",
    desc: "Airbnb-style full-stack application with user authentication and listings management.",
    github: "https://github.com/kavyap09/wander-lust",
    live: "https://wander-lust-ll4n.onrender.com/listings",
  },
  {
    title: "ChatGPT Clone",
    tech: "MERN, OpenAI API",
    desc: "Developed a ChatGPT-like conversational app with real-time AI responses.",
    github: "https://github.com/kavyap09/chatGpt",
    live: null,
  },
  {
    title: "RoleFit",
    tech: "MERN Stack",
    desc: "Career guidance web application that analyzes user skills and suggests suitable job roles with secure authentication and a responsive UI.",
    github: "https://github.com/kavyap09/Role-Fit",
    live: null,
  },
  {
    title: "Weather App",
    tech: "JavaScript, HTML, CSS, Bootstrap",
    desc: "Displays real-time weather reports from APIs across different regions.",
    github: "https://github.com/kavyap09/weather-proj",
    live: "https://kavyap09.github.io/weather-proj/",
  },
  {
    title: "Spotify Clone",
    tech: "HTML, CSS, Bootstrap",
    desc: "Spotify-like music player interface with responsive design.",
    github: "https://github.com/kavyap09/spotifyClone",
    live: "https://kavyap09.github.io/spotifyClone/",
  },
  {
    title: "Yoga Ease",
    tech: "React, HTML, CSS",
    desc: "Yoga website providing pose guidance and simple diet plans.",
    github: "https://github.com/kavyap09/yogaEase",
    live: "https://shiny-pegasus-eb65cb.netlify.app/",
  },
  {
    title: "Quora Posts",
    tech: "Node.js, Express, HTML, CSS",
    desc: "Quora-style web application with post creation and management features.",
    github: "https://github.com/kavyap09/quora-proj",
    live: "https://quora-project.onrender.com/posts",
  },
  {
    title: "MealMate App",
    tech: "Android Studio (Java)",
    desc: "Meal planning app offering recipes with macro-nutritional values.",
    github: "https://github.com/kavyap09/Meal-Mate",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section"> <h2 className="text-4xl font-bold mb-10">My Latest Works</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-3xl p-8 bg-gradient-to-br from-white/10 to-white/5 
                       border border-white/10 backdrop-blur-lg
                       transition-all duration-300
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {p.title}
                </h3>
                <span className="inline-block text-sm px-4 py-1 rounded-full 
                                 bg-indigo-500/10 text-indigo-400">
                  {p.tech}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xl">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  <FiGithub />
                </a>

                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition"
                  >
                    <FiExternalLink />
                  </a>
                ) : (
                  <span className="text-sm text-gray-500 cursor-not-allowed">
                    Live demo coming soon
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-base">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
