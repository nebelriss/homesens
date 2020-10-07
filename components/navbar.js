import React, { Children, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

function Navbar() {
  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  const closeMenu = () => setMenu(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                alt="Workflow logo"
              ></img>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/" activeClassName="bg-gray-900">
                  <a className="px-3 py-2 rounded-md text-sm font-medium text-white focus:outline-none focus:text-white focus:bg-gray-700">
                    Home
                  </a>
                </NavLink>
                <NavLink href="/raw-data" activeClassName="bg-gray-900">
                  <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    Raw Data
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
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
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
              Home
            </a>
          </Link>
          <Link href="/raw-data">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
              Raw Data
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
