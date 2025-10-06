import { useState, useEffect } from "react";

const menuItems = [
  { label: "FAQ", href: "/faq" },
  { label: "APPOINTMENT BOOKING", href: "/appointment" },
  {
    label: "CHECK PRICE",
    href: "#",
    submenu: [
      { label: "Service 1", href: "/check-price/service1" },
      { label: "Service 2", href: "/check-price/service2" },
    ],
  },
];

const mainMenuItems = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    href: "#",
    submenu: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
    ],
  },
  {
    label: "DEPARTMENTS",
    href: "#",
    submenu: [
      { label: "Medicine", href: "/departments/medicine" },
      { label: "Neuro Medicine", href: "/departments/neuro-medicine" },
      { label: "Cardiology", href: "/departments/cardiology" },
      { label: "Gastroenterology", href: "/departments/gastroenterology" },
      { label: "ENT", href: "/departments/ent" },
      { label: "Gynee & Obs.", href: "/departments/gynee-obs" },
      { label: "Nephrology", href: "/departments/nephrology" },
      { label: "Orthopedics", href: "/departments/orthopedics" },
      { label: "Oncology", href: "/departments/oncology" },
      { label: "Psychiatry", href: "/departments/psychiatry" },
      { label: "Pediatrics", href: "/departments/pediatrics" },
      { label: "Physical Medicine", href: "/departments/physical-medicine" },
      { label: "Skin & VD", href: "/departments/skin-vd" },
      { label: "Surgery", href: "/departments/surgery" },
      { label: "Urology", href: "/departments/urology" },
    ],
  },
  {
    label: "FOR PATIENT",
    href: "#",
    submenu: [
      { label: "Patient Info 1", href: "/for-patient/info1" },
      { label: "Patient Info 2", href: "/for-patient/info2" },
    ],
  },
  {
    label: "FOR DOCTORS",
    href: "#",
    submenu: [
      { label: "Doctor Info 1", href: "/for-doctors/info1" },
      { label: "Doctor Info 2", href: "/for-doctors/info2" },
    ],
  },
  { label: "BLOG", href: "/blog" },
  {
    label: "CONTACT",
    href: "#",
    submenu: [
      { label: "Contact Info 1", href: "/contact/info1" },
      { label: "Contact Info 2", href: "/contact/info2" },
    ],
  },
  { label: "DIAGNOSTIC REPORT", href: "/diagnostic-report" },
];

export default function Navbar() {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };
  
  return (
    <>
      {/* New top bar */}
      <div className="hidden lg:flex bg-gray-50 border-b border-gray-300 px-4 py-1 justify-between items-center text-xs text-gray-700 fixed top-0 left-0 right-0 z-40">
        <div className="flex md:space-x-5 md:ml-3 space-x-1.5 ml-[-7px]">
          <a href="/faq" className="hover:text-blue-600">FAQ</a>
          <a href="/appointment" className="hover:text-blue-600">APPOINTMENT BOOKING</a>
          <div className="relative group">
            <button className="hover:text-blue-600 flex items-center space-x-0">
              <span>CHECK PRICE</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="absolute left-0 top-full bg-white border border-gray-300 rounded shadow-md mt-1 hidden group-hover:block min-w-max z-20">
              <a href="/check-price/service1" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap">Service 1</a>
              <a href="/check-price/service2" className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap">Service 2</a>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-gray-700 mr-[-10px] md:mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1l2 5h13M16 16a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>24/7 Hotline <strong>+8809610-818888</strong></span>
        </div>
      </div>

      {/* Main navbar */}
      <header className="bg-gray-100 border-b justify-between items-center fixed top-0 left-0 right-0 z-20 border-gray-300">
        <div className="flex flex-row flex-nowrap justify-between items-center px-2 sm:px-4 py-1 text-xs text-gray-700 border-b border-gray-300">
          <div className="flex flex-nowrap space-x-1 sm:space-x-2 md:space-x-3 text-xs">
            {menuItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx} className="relative group">
                  <a href={item.href} className="hover:text-blue-600 cursor-pointer">
                    {item.label} ▼
                  </a>
                  <div className="absolute left-0 top-full bg-white border border-gray-300 rounded shadow-md mt-1 hidden group-hover:block z-10 min-w-max">
                    {item.submenu.map((subitem, subidx) => (
                      <a key={subidx} href={subitem.href} className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={idx} href={item.href} className="hover:text-blue-600 normal-case">
                  {item.label}
                </a>
              )
            )}
          </div>
          <div className="text-xs sm:text-sm flex items-center space-x-1">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1l2 5h13"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 16a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span>24/7 Hotline +8809610-818888</span>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-center px-2 sm:px-4 lg:px-6 py-3 bg-gray-100 shadow-md z-50 mt-0 relative">
          <div className="flex items-center justify-between w-full max-w-7xl">
            <a href="/" className="flex items-center space-x-2 flex-shrink-0">
              <img
                src="https://banner2.cleanpng.com/20180605/jwr/kisspng-computer-icons-interview-engineering-hospita-5b166644787189.9441098015281946284934.jpg"
                alt="Hospital"
                className="h-6 w-auto md:h-8"
              />
              <span className="font-semibold text-sm md:text-lg text-blue-700">HOSPITAL</span>
            </a>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-3 text-xs text-gray-700 font-medium">
              {mainMenuItems.map((item, idx) =>
                item.submenu ? (
                  <li key={idx} className="relative group">
                    <a href={item.href} className="hover:text-blue-600 cursor-pointer">
                      {item.label} ▼
                    </a>
                    <ul className="absolute left-0 top-full bg-white border border-gray-300 rounded shadow-md mt-1 hidden group-hover:block z-10 min-w-max">
                      {item.submenu.map((subitem, subidx) => (
                        <li key={subidx}>
                          <a href={subitem.href} className="block px-3 py-1 hover:bg-gray-100 whitespace-nowrap">
                            {subitem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={idx}>
                    <a href={item.href} className="hover:text-blue-600">
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Mobile toggle button */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`fixed top-8 right-0 h-full w-72 bg-white
              rounded-3xl shadow-xl transform transition-transform duration-300 border-b-4 border-b-blue-600
              ease-in-out z-50  ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
              <span className="font-semibold text-gray-800 uppercase">Menu</span>
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

           <ul className="flex flex-col text-gray-800 font-medium overflow-y-auto h-[calc(100vh-56px)]">
  {mainMenuItems.map((item, idx) =>
    item.submenu ? (
      <li key={idx} className="border-b border-gray-200">
        <button
          onClick={() => toggleSubmenu(idx)}
          className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 uppercase"
        >
          {item.label}
          <svg
            className={`w-4 h-4 transform transition-transform ${
              openSubmenu === idx ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"/>
          </svg>
        </button>

        {openSubmenu === idx && (
          <ul className="pl-6 bg-gray-50 max-h-48 overflow-y-auto">
            {item.submenu.map((subitem, subidx) => (
              <li key={subidx} className="border-b border-gray-100">
                <a
                  href={subitem.href}
                  className="block px-4 py-2 text-sm hover:text-blue-600"
                >
                  {subitem.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ) : (
      <li key={idx} className="border-b border-gray-200">
        <a
          href={item.href}
          className="block px-4 py-3 hover:bg-gray-50 uppercase"
        >
          {item.label}
        </a>
      </li>
    )
  )}
</ul>

          </div>

          {/* Overlay */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-transparent bg-opacity-40 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          )}
        </nav>
      </header>
    </>
  );
}
