import App from 'next/app';
import AppState from '../context/appState';

const MyApp = ({ Component, pageProps } ) => {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  )
}

export default MyApp;