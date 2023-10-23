import GlobalStyle from '@/styles/globalStyle';
import ErrorBoundary from '@/componets/ErrorBoundary';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}
