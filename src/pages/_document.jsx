import DefaultHead from '@/componets/DefaultHead';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <DefaultHead />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id='modal-root' />
      </body>
    </Html>
  );
}
