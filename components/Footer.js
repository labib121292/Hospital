// src/components/Footer.js
import React from "react";


const Footer = () => {
  return (
    <div className="relative">
      {/* Footer */}
      <footer
        className="relative w-full top-70 h-[220px] px-8 py-4 flex flex-col items-center justify-center"
        style={{ backgroundColor: "#00bafe" }}
      >
        {/* Waves */}
        <div className="absolute left-0 top-[-70px] w-full h-[100px] pointer-events-none">
          <div
            className="absolute w-full h-full opacity-95 z-[1000] animate-[wave1_3s_linear_infinite]"
            style={{
              backgroundImage: 'url("./ss.png")',
              backgroundSize: "1000px 100px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "0 0",
              bottom: -5,
            }}
          />
          <div
            className="absolute w-full h-full opacity-20 z-[500] animate-[wave1_5s_linear_infinite]"
            style={{
              backgroundImage: 'url("./ss.png")',
              backgroundSize: "1000px 100px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "0 0",
              bottom: 10,
            }}
          />
          <div
            className="relative w-full h-full opacity-40 z-[999] animate-[wave2_4s_linear_infinite]"
            style={{
              backgroundImage: 'url("./ss.png")',
              backgroundSize: "1000px 100px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "0 0",
              bottom: 0,
            }}
          />
          <div
            className="absolute w-full h-full opacity-30 z-[700] animate-[wave1_4s_linear_infinite]"
            style={{
              backgroundImage: 'url("./ss.png")',
              backgroundSize: "1000px 100px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "0 0",
              bottom: 15,
            }}
          />
          <div
            className="absolute w-full h-full opacity-20 z-[600] animate-[wave2_3s_linear_infinite]"
            style={{
              backgroundImage: 'url("./ss.png")',
              backgroundSize: "1000px 100px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "0 0",
              bottom: 15,
            }}
          />
        </div>

        {/* Social Icons */}
        <ul className="flex justify-center items-center flex-wrap my-2">
          <li className="mx-2 list-none">
            <a
              href="#"
              className="text-2xl text-black transition-transform duration-500 hover:-translate-y-2"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="mx-2 list-none">
            <a
              href="#"
              className="text-2xl text-black transition-transform duration-500 hover:-translate-y-2"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="mx-2 list-none">
            <a
              href="#"
              className="text-2xl text-black transition-transform duration-500 hover:-translate-y-2"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="mx-2 list-none">
            <a
              href="#"
              className="text-2xl text-black transition-transform duration-500 hover:-translate-y-2"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>

        {/* Menu */}
        <ul className="flex justify-center items-center flex-wrap my-2">
          <li className="mx-2 list-none">
            <a
              
              className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline"
            >
              Home
            </a>
          </li>
          <li className="mx-2 list-none">
            <a
              href="#"
              className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline"
            >
              About
            </a>
          </li>
          <li className="mx-2 list-none">
            <a
              href="#"
              className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline"
            >
              Services
            </a>
          </li>
          <li className="mx-2 list-none">
            <a
              href="#"
              className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline"
            >
              Team
            </a>
          </li>
          <li className="mx-2 list-none">
            <a
              href="#"
              className="text-lg text-black opacity-75 font-light transition-opacity duration-500 hover:opacity-100 no-underline"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-black my-4 text-base font-light">
          &copy;2025 Laib Hasan | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
