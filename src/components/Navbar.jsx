"use client";
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import i18next from "../../i18n";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  return (
    <nav className={`absolute top-0 left-0 z-50 w-full bg-transparent`}>
      {/* Navbar Content */}
      <div className="w-full flex justify-between items-center mx-auto px-5 lg:px-14 mt-4">
        <div className="w-full flex justify-start items-center gap-10">
          <div className="pb-1 cursor-pointer" onClick={() => setIsOpen(true)}>
            <IoIosMenu color="#ffffff" size={25} />
          </div>
          <div>
            <Link
              href="#"
              className="uppercase tracking-[0.2em] font-medium text-white text-[12px] leading-[34px] hidden lg:block"
            >
              {t("navbar.book")}
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            src="/logo-salama-white.png"
            alt="Logo le salama marrakech"
            className={`w-auto h-auto lg:w-44`}
          />
        </div>
        <div className="w-full flex justify-end items-center gap-3 text-white cursor-pointer">
          <div
            className="relative "
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button className="text-white flex justify-center items-center gap-2">
              <span>{t("navbar.lang")}</span>
              <div className="pb-1">
                <RiArrowDownSLine color="#ffffff" size={18} />
              </div>
            </button>
            {isDropdownOpen && (
              <ul className="absolute rounded top-8 -left-20 bg-primary mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                <li
                  className="px-4 py-2 hover:bg-primary_8 rounded-lg cursor-pointer"
                  onClick={() => changeLanguage("en")}
                >
                  <img src="/english.png" className="w-6 h-6 md:w-7 md:h-7" />
                </li>
                <li
                  className="px-4 py-2 hover:bg-secondary rounded-lg cursor-pointer"
                  onClick={() => changeLanguage("fr")}
                >
                  <img src="/france.png" className="w-6 h-6 md:w-7 md:h-7" />
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Full-screen mobile menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-700"
          enterFrom="transform -translate-x-full opacity-0"
          enterTo="transform -translate-x-0 opacity-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform -translate-x-0 opacity-100"
          leaveTo="transform -translate-x-full opacity-0"
        >
          <div className="fixed top-0 left-0 z-10 w-full lg:w-[25%] h-screen bg-white flex flex-col items-left justify-start lg:justify-center gap-16  py-14 px-20">
            <div className="text-secondary" onClick={() => setIsOpen(false)}>
              <IoMdClose size={20} />
            </div>
            <ul
              onClick={() => setIsOpen(false)}
              className="space-y-8 text-secondary leading-[25px] text-[20px] uppercase font-light"
            >
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="/">{t("navbar.home")}</Link>
              </li>
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="#about">{t("navbar.about")}</Link>
              </li>

              <li className="pb-3 border-b border-bg_navbar">
                <Link href="#events">{t("navbar.events")}</Link>
              </li>
              <li className="pb-3 border-b border-bg_navbar">
                <Link
                  target="_blank"
                  href="https://www.lesalamamarrakech.com/menu/"
                >
                  {t("navbar.menu")}
                </Link>
              </li>
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="#contact">{t("navbar.contact")}</Link>
              </li>
              <li className="pb-3 border-b border-bg_navbar">
                <Link href="#gallery">{t("navbar.gallery")}</Link>
              </li>
            </ul>
            <Link className="text-secondary" href="#">
              <FaInstagram size={20} />
            </Link>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
