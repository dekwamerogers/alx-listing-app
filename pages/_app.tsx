import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Example of global CSS import

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;