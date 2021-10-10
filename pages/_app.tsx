import type { AppProps } from 'next/app';

// provider
import AuthProvider from 'src/provider/AuthProvider';

// styles
import 'src/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
