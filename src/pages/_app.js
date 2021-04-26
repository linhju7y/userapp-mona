import '~styles/reset.scss';
import '~styles/globals.scss';
import React, { useEffect } from 'react';
import { Provider as AuthProvider } from 'next-auth/client';
import { useRouter } from 'next/router';

export function reportWebVitals(metric) {
  //   console.log('reportWebVitals', metric);
  // https://nextjs.org/docs/advanced-features/measuring-performance
}
function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeError = (err, url) => {
      console.log('handleRouteChangeError', err);
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`);
      }
    };

    router.events.on('routeChangeError', handleRouteChangeError);
    return () => {
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);
  return (
    <AuthProvider session={session}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
