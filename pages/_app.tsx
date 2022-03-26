import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import fetchTheme from 'utils/fetchTheme';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    fetchTheme();
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
