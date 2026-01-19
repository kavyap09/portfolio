import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
   {
    title: "MERN STACK COMPLETION-APNA COLLEGE",
    link: "https://drive.google.com/file/d/1JlCTi77htlWH4-p7SQNlolgPrhubI3o5/view?usp=sharing",
  },
   {
    title: "Android Developer Virtual internship-EDUSKILLS",
    link: "https://drive.google.com/file/d/1SUbrZZKR0tx_6DbwQK-izPxnzgc7gz16/view?usp=sharing",
  },
  {
    title: "Accenture North America Project Management – Forage",
    link: "https://drive.google.com/file/d/1APK-Fmq-EK7lajAoEY7GS568cBoFeRu_/view?usp=sharing",
  },
  {
    title: "AWS APAC Solutions Architecture – Forage",
    link: "https://drive.google.com/file/d/1s5uBxLbCnqnphC4ueeheNIc6dNp_bVvq/view?usp=sharing",
  },
  {
    title: "Deloitte Data Analytics – Forage",
    link: "https://drive.google.com/file/d/1BU1RYRoABpz0tBewKYjdrbM4yeEtqvEh/view?usp=sharing",
  },
  {
    title: "Deloitte Technology Job Simulation – Forage",
    link: "https://drive.google.com/file/d/1lgMKcZgHkZlESE9Fl2zWQi_Wl6P92tE3/view?usp=sharing",
  },
  {
    title: "Tata Data Analytics – Forage",
    link: "https://drive.google.com/file/d/1xQyjQCkrK6aP3WDj7IjtWMGnVYgdXgP9/view?usp=sharing",
  },
 {
    title: "Tata Data Analytics – Forage",
    link: "https://drive.google.com/file/d/1xQyjQCkrK6aP3WDj7IjtWMGnVYgdXgP9/view?usp=sharing",
  }, {
    title: "Deloitte Cyber Job Simulation – Forage",
    link: "https://drive.google.com/file/d/12W5syVWjCWFM0JFFBCG2_GsCRajVSNgA/view?usp=sharing",
  },
];

export default function Certifications() {
  return (
    <section id="certification" className="section">
      <h2 className="text-4xl font-bold mb-8">Certifications</h2>

      <div className="space-y-4">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="card flex items-center justify-between hover:border-blue-500"
          >
            <p className="text-gray-300">{cert.title}</p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
