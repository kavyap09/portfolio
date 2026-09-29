import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
    {
    title: "NPTEL - Cloud Computing",
    link: "https://drive.google.com/file/d/1A-wHggNbypvNJm7OXtql2H3ieKgdtkIh/view?usp=sharing",
  },
  {
    title: "Android Developer Virtual Internship",
    link: "https://drive.google.com/file/d/1SUbrZZKR0tx_6DbwQK-izPxnzgc7gz16/view?usp=sharing",
  },
  {
    title: "Runner Up-Summer Saas AI Hackathon",
    link: "https://drive.google.com/file/d/16cqJGBV2wQCLh2mhd8F1TJ3mYdwz8KLd/view?usp=sharing",
  },
  {
    title: "Accenture Project Management – Forage",
    link: "https://drive.google.com/file/d/1APK-Fmq-EK7lajAoEY7GS568cBoFeRu_/view?usp=sharing",
  },
  {
    title: "Deloitte Data Analytics – Forage",
    link: "https://drive.google.com/file/d/1BU1RYRoABpz0tBewKYjdrbM4yeEtqvEh/view?usp=sharing",
  },
  {
    title: "Deloitte Cyber Job Simulation – Forage",
    link: "https://drive.google.com/file/d/12W5syVWjCWFM0JFFBCG2_GsCRajVSNgA/view?usp=sharing",
  },
  {
    title: "Explore More Certifications",
    link: "https://drive.google.com/drive/u/0/folders/1vTTirDXfpAirC6Xhnzb3ElrDM5DRARDq",
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
