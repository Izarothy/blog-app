import React from 'react';

import changeTheme from '../utils/changeTheme';

type Props = {
  right: boolean;
};

const DarkModeButton = ({ right }: Props) => {
  return (
    <button
      onClick={changeTheme}
      className={`rounded-xl p-2 dark:text-gray-100 flex gap-1 ${
        right && `absolute right-0`
      }`}
    >
      Mode
      {/* Light SVG  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 block text-primary-dark dark:hidden "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      {/* Moon SVG  */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 hidden dark:block text-gray-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default DarkModeButton;
