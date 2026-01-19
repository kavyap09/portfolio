import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="text-4xl font-bold mb-6">Get to Know Me Better</h2>

      <p className="text-gray-400 max-w-3xl leading-relaxed">
        I'm Kavya Pendyala, an aspiring MERN Full Stack Developer currently
        pursuing my B.Tech in Information Technology. I enjoy creating clean,
        user-friendly and scalable web applications using modern technologies.
        My goal is to build products that are both visually appealing and
        technically strong.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold">6+</h3>
          <p className="text-gray-400">Projects Completed</p>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold">9.18</h3>
          <p className="text-gray-400">Current CGPA</p>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold">2027</h3>
          <p className="text-gray-400">Graduation Year </p>
        </div>
      
  
      </div>
    </section>
  );
}
