import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext({
  theme: false,
  setTheme: (theme: boolean) => {},
});
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme(true);
    } else {
      document.documentElement.classList.remove('dark');
      setTheme(false);
    }
  }, []);
  return (
    <>
      <DarkModeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <Component {...pageProps} />
      </DarkModeContext.Provider>
    </>
  );
}

export default MyApp;
