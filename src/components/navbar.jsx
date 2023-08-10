import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import logo from "../../public/logo-banu.png";

function NavBar(props) {
  const [open, setOpen] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToTop = window.scrollY === 0;
      setIsAtTop(scrolledToTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;
  const isHome = router.pathname === "/";

  const navItem = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Tentang",
      href: "",
      items: [
        {
          name: "Profil",
          href: "/profil",
        },
        {
          name: "Pemerintahan",
          href: "/pemerintahan",
        },
      ],
    },
    {
      name: "Peta",
      href: "/peta",
    },
    {
      name: "BUMDes",
      href: "/bumdes",
    },
    {
      name: "Berita",
      href: "/berita",
    },

    {
      name: "Galeri",
      href: "/galeri",
    },
  ];

  return (
    <>
      <div
        className={` fixed top-0 w-full z-999 ${
          isAtTop
            ? `${isHome ? "bg-transparent" : "bg-c-green shadow-md"}`
            : "navbar"
        } 
        
        ${
          visible ? "translate-y-0" : "-translate-y-full"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between items-center max-w-[1080px] w-full mx-auto h-16 xl:px-0 md:px-20 px-8">
          <div className="flex justify-start items-center gap-4">
            <Link href="/" style={{ width: "40px", height: "40 px" }}>
              <Image
                src={logo}
                alt="logo"
                layout="responsive"
                width={40}
                height={40}
              />
            </Link>
            <span className="leading-none font-bold text-c-gold2 text-base">
              Desa Banuroja
            </span>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-c-gold hover:text-white hover:bg-c-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-c-lightgold"
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

          <nav className="hidden md:flex flex-row justify-between gap-3 lg:gap-6">
            {navItem.map((item, index) => (
              <ul key={index} className="flex flex-col">
                {item.href == "" ? (
                  <a
                    className={`relative group flex hover:text-c-gold ${
                      isActive(item.href) ? "text-c-gold2" : "text-white"
                    }`}
                  >
                    <span className="flex flex-row justify-center items-center gap-2">
                      {item.name}{" "}
                      <BsChevronDown size={10} className=""></BsChevronDown>
                    </span>
                    <div className="hidden absolute mt-2 group-hover:block">
                      <div className="flex flex-col rounded-lg overflow-hidden mt-5">
                        {item.items.map((child, index) => (
                          <Link
                            key={index}
                            href={child.href}
                            className="block px-4 py-2 text-white bg-c-darkgreen  hover:bg-c-green"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={` hover:text-c-gold ${
                      isActive(item.href) ? "text-c-gold2" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {isActive(item.href) && (
                  <div className="w-full h-[0.5px] bg-c-gold2" />
                )}
              </ul>
            ))}
          </nav>
          {props.type && (
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
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
                <div className="flex flex-row justify-center items-center gap-4">
                  <span>
                    <Image src={logo} alt="logo" width={40} height={40} />
                  </span>
                  <span className="leading-none font-bold text-c-gold2 text-base">
                    Desa Banuroja
                  </span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-c-darkgreen"
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
