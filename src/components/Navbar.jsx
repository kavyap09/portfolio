import React from "react";
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-4 bg-[#0b0f19] border-b border-gray-800 fixed top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-400">
        <a href="#hero">Kavya Pendyala</a>
      </h1>

      {/* Links */}
      <ul className="flex gap-8 text-gray-300">
        <li className="hover:text-blue-400 cursor-pointer">
          <a href="#about">About</a>
        </li>
         <li className="hover:text-blue-400 cursor-pointer">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
          <a href="#certification">Certification</a>
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
