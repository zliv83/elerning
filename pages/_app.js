import Head from 'next/head';
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from '@next/font/google';

import '@/styles/globals.scss';

const mont = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
        />
      </Head>
      <main id="modal-root" className={mont.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
