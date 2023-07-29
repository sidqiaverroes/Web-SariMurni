import Image from "next/image";

import React from "react";
import Link from "next/link";

import logo from "../../public/logo-banu.png";

function NavBar(props) {
  const [open, setOpen] = React.useState(false);

  //   const handleScrollTo = (event, targetId) => {
  //     event.preventDefault();
  //     const scrollTo = document.getElementById(targetId);

  //     if (scrollTo) {
  //       scrollTo.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  const navItem = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Organisasi",
      href: "/organisasi",
    },
    {
      name: "Potensi",
      href: "/potensi",
    },
    {
      name: "Berita",
      href: "/berita",
    },
    {
      name: "Bumdes",
      href: "/bumdes",
    },
    {
      name: "Galeri",
      href: "/galeri",
    },
    {
      name: "Peta",
      href: "/peta",
    },
  ];

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-c-green shadow-md">
        <div className="flex justify-between items-center max-w-[1080px] w-full mx-auto h-16 xl:px-0 px-8">
          <div className="flex justify-start items-center gap-4">
            <a href="/" style={{ width: "40px", height: "40 px" }}>
              <Image
                src={logo}
                alt="logo"
                layout="responsive"
                width={40}
                height={40}
              />
            </a>
            <span className=" font-bold text-c-gold2 text-base">
              Desa Banuroja
            </span>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navItem.map((item, index) => (
              <ul key={index}>
                <Link href={item.href} className="text-white hover:text-c-gold">
                  {item.name}
                </Link>
              </ul>
            ))}
          </nav>
          {props.type && (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                href="/seek"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
              >
                Seek Now
              </Link>
            </div>
          )}
        </div>
        {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: ""
        To: ""
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItem.map((item, index) => (
                    <ul key={index}>
                      <Link
                        href={item.href}
                        className="text-c-green hover:text-c-gold"
                      >
                        {item.name}
                      </Link>
                    </ul>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
