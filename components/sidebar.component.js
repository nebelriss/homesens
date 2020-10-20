import React, { useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faTable,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const NavLink = ({ children, style, icon, clickAction, ...props }) => {
  const { asPath } = useRouter();

  const className =
    asPath === props.href || asPath === props.as
      ? style.active
      : style.inactive;

  return (
    <Link {...props}>
      <a className={className} onClick={clickAction}>
        <FontAwesomeIcon
          className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
          icon={icon}
          size="2x"
        />
        {children}
      </a>
    </Link>
  );
};

const NavLinkList = ({ style, clickAction, locations }) => {
  return (
    <>
      <NavLink href="/" style={style} icon={faHome} clickAction={clickAction}>
        Dashboard
      </NavLink>
      <div className="py-3">
        {locations.map((loc) => (
          <NavLink
            href={`/locations/${loc.id}`}
            key={loc.id}
            style={style}
            icon={faAngleRight}
            clickAction={clickAction}
          >
            {loc.name}
          </NavLink>
        ))}
      </div>
      <NavLink
        href="/raw-data"
        style={style}
        icon={faTable}
        clickAction={clickAction}
      >
        Raw Data
      </NavLink>
    </>
  );
};

const Sidebar = ({ isMobileMenuOpen, closeMobileMenu, locations }) => {
  const linkStyle = {
    active:
      'group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150',
    inactive:
      'group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150',
  };
  const linkStyleMobile = {
    active:
      'group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150',
    inactive:
      'group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150',
  };
  return (
    <>
      {/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
      <div className={`${isMobileMenuOpen ? '' : 'hidden'} md:hidden`}>
        <div className="fixed inset-0 flex z-40">
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <div className="absolute top-0 right-0 -mr-14 p-1">
              <button
                className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
                onClick={closeMobileMenu}
              >
                <svg
                  className="h-6 w-6 text-gray-700"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2 space-y-1">
                <NavLinkList
                  style={linkStyleMobile}
                  clickAction={closeMobileMenu}
                  locations={locations}
                />
              </nav>
            </div>
          </div>

          <div className="flex-shrink-0 w-14">
            {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      </div>
      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 bg-white space-y-1">
                <NavLinkList style={linkStyle} locations={locations} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
