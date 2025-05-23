"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useUser } from "@/context/UserContext"; // Import useUser

export const Navbar = () => {
  const { userName, logout } = useUser(); // Access user context
  const navigation = [
    { label: "Início", href: "/" },
    { label: "Temas Biblicos", href: "/estudos" },
    { label: "Verbum AI", href: "/chat" },
    { label: "Estudos Biblicos", href: "/cursos" },
    { label: "Sobre", href: "/sobre" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-emerald-600 dark:text-gray-100">
            <Image
              src="/img/logo.png"
              width="40"
              height="40"
              alt="Verbum Logo"
              className="w-16"
            />
            <span>Verbum</span>
          </span>
        </Link>

        {/* Right side buttons */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2 items-center"> {/* Added items-center for alignment */}
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item items-center"> {/* Added items-center for alignment */}
            {userName ? (
              <>
                <span className="px-4 py-2 text-gray-800 dark:text-gray-200">Olá, {userName}</span>
                <button
                  onClick={logout}
                  className="px-6 py-2 text-white bg-red-600 rounded-md md:ml-2 hover:bg-red-700"> {/* Adjusted margin */}
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="px-6 py-2 text-white bg-teal-700 rounded-md md:ml-5">
                Login
              </Link>
            )}
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-emerald-700 focus:text-emerald-700 focus:bg-emerald-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {open ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  ) : (
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link key={index} href={item.href} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-emerald-700 focus:text-emerald-700 focus:bg-emerald-100 dark:focus:bg-gray-800 focus:outline-none">
                      {item.label}
                    </Link>
                  ))}
                  {userName ? (
                    <>
                      <span className="w-full px-4 py-2 -ml-4 text-gray-800 dark:text-gray-200 text-center">Olá, {userName}</span>
                      <button
                        onClick={logout}
                        className="w-full px-6 py-2 mt-3 text-center text-white bg-red-600 rounded-md hover:bg-red-700">
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link href="/login" className="w-full px-6 py-2 mt-3 text-center text-white bg-teal-700 rounded-md lg:ml-5">
                      Login
                    </Link>
                  )}
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={item.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-emerald-700 focus:text-emerald-700 focus:bg-emerald-100 focus:outline-none dark:focus:bg-gray-800">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
