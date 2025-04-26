"use client";
import React, { useState } from "react";
import { icons, sideIcons } from "@/public/assets/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {adminGeneral, adminService, adminSideBar,} from "@/lib/json";
import {Logo, PrimaryLogo, SecondaryLogo} from "@/components/atoms/logo";
import ButtonComponent from "@/components/atoms/button-component";



function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };
  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const pathname = usePathname();
  const isRouteActive = (menuLink: string) => {
    if (menuLink === "/admin") {
      return pathname === menuLink;
    }
    return pathname === menuLink || pathname.startsWith(`${menuLink}/`);
  };


  // Admin Menu

  return (
      <div
          className={cn(
              "h-screen bg-white w-[288px] duration-150 flex flex-col",
              isOpen ? null : "w-[115px]"
          )}
      >
        <div className="flex items-center h-[92px] relative px-8 shrink-0">
          {isOpen ? <PrimaryLogo/> : <Logo/>}
          <button
              className={cn(
                  "absolute top-1/2 -translate-y-1/2 -right-3 bg-secondary w-5 h-5 flex justify-center items-center rounded-full z-30 duration-150",
                  isOpen ? null : "rotate-180"
              )}
              onClick={toggleSideBar}
          >
            {icons.chevrons_left}
          </button>
        </div>
        <div
            className={cn(
                "gap-1 flex flex-col overflow-auto flex-grow px-4 ",
                isOpen ? null : "items-center"
            )}
        >
          <p
              className={cn(
                  "text-normal font-bold text-sm text-dark-gray uppercase px-4",
                  isOpen ? null : "px-0 text-center"
              )}
          >
            Admin Menu
          </p>


          {adminSideBar.map((menu, index) => {
                const active = isRouteActive(menu.link);
                return (
                    <Link
                        key={index}
                        className={cn(
                            "hover:bg-green-50 group text-text text-sm font-medium rounded-lg py-3 px-4 flex gap-4 items-center capitalize duration-150",
                            // menu.link === pathname ? "bg-[#FEC28B]" : null,
                            active ? "bg-[#FEC28B]" : null,
                            isOpen ? null : "hover:bg-transparent !bg-transparent"
                        )}
                        href={menu.link}
                        onMouseOver={() => handleHover(index)}
                        onMouseOut={handleMouseOut}
                    >
            <span
                className={cn(
                    "shrink-0 w-8 h-8 rounded-lg border group-hover:bg-[#04BA99] group-hover:border-none duration-150 flex items-center justify-center",
                    // menu.link === pathname ? "bg-[#04BA99] border-none" : null
                    active ? "bg-[#04BA99] border-none" : null
                )}
            >
              {/*{hoveredIndex === index || menu.link === pathname*/}
              {/*    ? menu.active_icon*/}
              {/*    : menu.icon}*/}
              {hoveredIndex === index || active
                  ? menu.active_icon
                  : menu.icon}

            </span>
                      {isOpen ? <span>{menu.label}</span> : null}
                    </Link>
                )
              }
          )}

          <p
              className={cn(
                  "text-normal text-sm font-bold text-dark-gray uppercase px-4 mt-5",
                  isOpen ? null : "px-0 text-center"
              )}
          >
            Admin Services
          </p>
          {adminService.map((menu, index) => (
              <Link
                  key={index}
                  className={cn(
                      "hover:bg-green-50 group text-text text-sm font-medium rounded-lg py-3 px-4 flex gap-4 items-center capitalize duration-150",
                      menu.link === pathname ? "bg-[#FEC28B]" : null,
                      isOpen ? null : "hover:bg-transparent !bg-transparent"
                  )}
                  href={menu.link}
                  onMouseOver={() => handleHover(index)}
                  onMouseOut={handleMouseOut}
              >
            <span
                className={cn(
                    "shrink-0 w-8 h-8 rounded-lg border group-hover:bg-[#04BA99] group-hover:border-none duration-150 flex items-center justify-center",
                    menu.link === pathname ? "bg-[#04BA99] border-none" : null
                )}
            >
              {hoveredIndex === index || menu.link === pathname
                  ? menu.active_icon
                  : menu.icon}
            </span>
                {isOpen ? <span>{menu.label}</span> : null}
              </Link>
          ))}

          <p
              className={cn(
                  "text-normal text-sm font-bold text-dark-gray uppercase px-4 mt-5",
                  isOpen ? null : "px-0 text-center"
              )}
          >
            General Settings
          </p>
          {adminGeneral.map((menu, index) => (
              <Link
                  key={index}
                  className={cn(
                      "hover:bg-green-50 group text-text text-sm font-medium rounded-lg py-3 px-4 flex gap-4 items-center capitalize duration-150",
                      menu.link === pathname ? "bg-[#FEC28B]" : null,
                      isOpen ? null : "hover:bg-transparent !bg-transparent"
                  )}
                  href={menu.link}
                  onMouseOver={() => handleHover(index)}
                  onMouseOut={handleMouseOut}
              >
            <span
                className={cn(
                    "shrink-0 w-8 h-8 rounded-lg border group-hover:bg-[#04BA99] group-hover:border-none duration-150 flex items-center justify-center",
                    menu.link === pathname ? "bg-[#04BA99] border-none" : null
                )}
            >
              {hoveredIndex === index || menu.link === pathname
                  ? menu.active_icon
                  : menu.icon}
            </span>
                {isOpen ? <span>{menu.label}</span> : null}
              </Link>
          ))}


          <button
              className={cn(
                  "hover:bg-secondary  text-text text-sm font-medium rounded-lg py-3 px-4 flex gap-4 items-center capitalize duration-150"
              )}
          >
          <span
              className={cn(
                  "shrink-0 w-8 h-8 rounded-lg border  duration-150 flex items-center justify-center"
              )}
          >
            {sideIcons.logout}
          </span>
            {isOpen ? <span>Logout</span> : null}
          </button>

          {isOpen ? (
              <div
                  className="mt-auto mx-auto w-[192px] shadow-2xl border rounded-[20px] py-7 px-[23px] my-6 bg-orange-200 bg-[url('/assets/images/Ellipse 128.svg'),url('/assets/images/Ellipse 129.svg')] bg-[left_top,right_bottom] bg-[auto,auto] flex flex-col gap-8 items-center">
                <div className="flex flex-col items-center gap-2">
              <span className="flex items-center justify-center w-12 h-12 bg-white rounded-2xl">
                {icons.star}
              </span>
                  <SecondaryLogo/>
                  <p className="text-center  text-xs font-medium">
                    Get access to all features
                  </p>
                </div>

                <ButtonComponent
                    label="get pro"
                    className="bg-white text-primary hover:bg-white w-full"
                />
              </div>
          ) : (
              <button
                  className="mt-auto mx-auto bg-[#FEC28B] w-12 h-12 flex items-center justify-center rounded-xl shrink-0 text-white text-3xl font-normal my-6">
                +
              </button>
          )}
        </div>
      </div>
  );
}

export default SideBar;
