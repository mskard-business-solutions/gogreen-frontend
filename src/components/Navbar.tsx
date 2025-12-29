"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 main-navbar py-2">
      <div className="max-w-full px-0">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between px-4 lg:px-10">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img/vidhi_logo-removebg-preview.png"
              width={120}
              height={100}
              className="logo-img"
              alt="Vidhi Enterprises Logo"
              priority
            />
          </Link>

          {/* Search Bar (Desktop & Tablet) */}
          <div className="hidden sm:flex flex-grow max-w-[400px] mx-4">
            <div className="search-bar-rounded w-full relative flex items-center">
              <input 
                type="search" 
                className="w-full bg-transparent py-3 pl-6 pr-12 text-lg outline-none border-none focus:ring-0" 
                placeholder="Search" 
              />
              <button className="absolute right-0 top-0 w-12 h-12 flex items-center justify-center bg-primary text-white hover:bg-dark transition-colors rounded-full m-0.5">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>

          {/* Mobile Toggler */}
          <button 
            className="lg:hidden p-2 text-dark focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="fa fa-bars text-2xl"></span>
          </button>

          {/* Navigation Links */}
          <div className={`${isNavOpen ? 'block' : 'hidden'} lg:flex w-full lg:w-auto items-center mt-4 lg:mt-0`}>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-4 w-full">
              <Link href="/" className="nav-link"><b>Home</b></Link>
              
              <div className="relative group">
                <button className="nav-link flex items-center">
                  <b>Products</b> <i className="fa fa-chevron-down ml-2 text-[10px]"></i>
                </button>
                <div className="lg:absolute left-0 mt-0 w-48 bg-light border-none rounded shadow-xl hidden group-hover:block z-50">
                  <Link href="/dripirri" className="dropdown-item"><b>Drip Irrigation</b></Link>
                  <Link href="/sprinkler" className="dropdown-item"><b>Sprinkler Irrigation</b></Link>
                  <Link href="/rainsprinkler" className="dropdown-item"><b>Rain Sprinkler</b></Link>
                  <Link href="/landscape" className="dropdown-item"><b>Landscape Irrigation</b></Link>
                  <Link href="/economical" className="dropdown-item"><b>Economical Irrigation</b></Link>
                  <Link href="/vidhi-kit" className="dropdown-item"><b>Vidhi Kit</b></Link>
                </div>
              </div>

              <div className="relative group">
                <button className="nav-link flex items-center">
                  <b>About Us</b> <i className="fa fa-chevron-down ml-2 text-[10px]"></i>
                </button>
                <div className="lg:absolute left-0 mt-0 w-56 bg-light border-none rounded shadow-xl hidden group-hover:block z-50">
                  <Link href="/company-profile" className="dropdown-item"><b>Company Profile</b></Link>
                  <Link href="/founder-vision" className="dropdown-item"><b>Founder's Vision</b></Link>
                  <Link href="/our-journey" className="dropdown-item"><b>Our Journey</b></Link>
                  <Link href="/legacy-leader" className="dropdown-item"><b>Legacy & Leadership</b></Link>
                  <Link href="/manfacture" className="dropdown-item"><b>Manufacturing & Infra</b></Link>
                  <Link href="/quality-policy" className="dropdown-item"><b>Quality Policy</b></Link>
                  <Link href="/sustainable" className="dropdown-item"><b>Sustainability</b></Link>
                  <Link href="/global-presence" className="dropdown-item"><b>Global Presence</b></Link>
                  <Link href="/blog" className="dropdown-item"><b>Blog</b></Link>
                  <Link href="/careers" className="dropdown-item"><b>Careers</b></Link>
                </div>
              </div>

              <Link href="/contact" className="nav-link"><b>Contact Us</b></Link>

              {/* Right Logo (Colored) */}
              <Link href="/" className="hidden lg:flex items-center ml-4">
                <Image
                  src="/img/logo-olored.png"
                  width={80}
                  height={60}
                  className="h-14 w-auto"
                  alt="Vidhi Enterprises Logo Right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
