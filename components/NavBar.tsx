import Link from 'next/link';
import React from 'react';
import DarkModeButton from './DarkModeButton';

export const NavBar = () => {
  return (
    <nav className="dark:bg-primary-dark dark:text-gray-100 bg-gray-100 text-primary-dark p-3 md:px-12 md:w-md lg:w-lg mx-auto">
      <ul className="flex justify-between">
        <li className="cursor-pointer pt-2">
          <Link href="/">/</Link>
        </li>
        <li>
          <DarkModeButton right={false} />
        </li>
      </ul>
    </nav>
  );
};
