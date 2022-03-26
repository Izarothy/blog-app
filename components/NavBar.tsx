import Link from 'next/link';
import React from 'react';
import DarkModeButton from './DarkModeButton';

export const NavBar = () => {
  return (
    <nav className="dark:bg-primary-dark dark:text-gray-100 bg-gray-100 text-primary-dark p-3">
      <ul className="flex justify-between">
        <li className="cursor-pointer pt-2">
          <Link href="/">/</Link>
        </li>
        <li>
          <DarkModeButton />
        </li>
      </ul>
    </nav>
  );
};
