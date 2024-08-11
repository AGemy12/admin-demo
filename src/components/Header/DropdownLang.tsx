import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";
import i18n from "../../../i18n";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const currentLang = localStorage.getItem("lang") || "EN";
    document.documentElement.dir = currentLang === "AR" ? "rtl" : "ltr";
    i18n.changeLanguage(currentLang.toLowerCase());
  }, []);

  const handleLanguageChange = (lang: string) => {
    window.location.reload();
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
    i18n.changeLanguage(lang.toLowerCase());
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative ">
      <li>
        <Link
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
          href="#"
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-stroke bg-gray-2 text-dark hover:text-primary dark:border-dark-4 dark:bg-dark-3 dark:text-white dark:hover:text-white"
        >
          <span className="relative">
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15"
              />
            </svg>
          </span>
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute right-1/2 mt-[10px] flex  w-fit translate-x-1/2 flex-col rounded-xl border-[0.5px] border-stroke bg-white px-5.5 pb-1 pt-1 shadow-default dark:border-dark-3 dark:bg-gray-dark`}
          >
            <ul className="no-scrollbar flex h-auto flex-col gap-1 overflow-y-auto">
              <li className="px-[10px]">
                <button
                  onClick={() => handleLanguageChange("EN")}
                  className="w-full duration-300 hover:text-white"
                >
                  {" "}
                  EN{" "}
                </button>
              </li>
              <li className="px-[10px]">
                <button
                  className="w-full duration-300 hover:text-white"
                  onClick={() => handleLanguageChange("AR")}
                >
                  {" "}
                  AR{" "}
                </button>
              </li>
            </ul>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownNotification;
