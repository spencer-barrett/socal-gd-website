"use client";

import { ROUTES } from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Pathway {
  name: string;
  href: ROUTES;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathways: Pathway[] = [
    { name: "Home", href: ROUTES.HOME },
    { name: "GDG Page", href: ROUTES.GDG },
    // Add more pathways as needed
  ];

  return (
    <nav className="w-full bg-dark-400 px-4 py-2 md:px-6 md:py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/images/google-logo.png"
            height={80}
            width={80}
            alt="Google Dev Group logo"
            className="mr-4"
          />
        </div>

        <div className="flex space-x-6 text-white">
          <Link
            href={ROUTES.HOME}
            className="text-body-xl hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href={ROUTES.GDG}
            className="text-body-xl hover:text-gray-300 transition-colors duration-200"
          >
            GDG Page
          </Link>
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-center items-center w-full text-body-xl text-white hover:text-gray-300 transition-colors duration-200"
            >
              Pathways
              <Image
                src={"/images/arrow-down.png"}
                alt={"arrow"}
                width={30}
                height={30}
              />
            </button>

            {isOpen && (
              <div
                className="
                  absolute right-0 mt-2 w-[80vw] max-w-md rounded-lg shadow-lg bg-dark-400 
                  transform transition-all duration-300 ease-in-out origin-top-right
                  z-50
                "
              >
                <div className="p-4 grid grid-cols-2 gap-4">
                  {pathways.map((pathway) => (
                    <Link
                      key={pathway.name}
                      href={pathway.href}
                      className="
                        px-4 py-3 text-sm text-white 
                        bg-dark-300 hover:bg-dark-200 
                        rounded-md transition-colors duration-200
                        flex items-center justify-between
                        transform hover:scale-105
                      "
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{pathway.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
