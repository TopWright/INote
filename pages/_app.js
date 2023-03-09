import "@/styles/globals.css";
import Head from "next/head";

import { AuthProvider } from "@/src/context/auth-context";

import { Provider } from 'react-redux'
import store from "@/src/store";

import Router from "next/router";
import nProgress from "nprogress";

Router.onRouteChangeStart = url => {
  nProgress.start();
}

Router.onRouteChangeComplete = () => nProgress.done();

Router.onRouteChangeError = () => nProgress.done();


export default function App({ Component, pageProps }) {
  return (
    <Provider store={ store }>
      <AuthProvider>
        <Head>
          <title>INote | Onine Note App</title>
        </Head>
        <Component { ...pageProps } />
      </AuthProvider>
    </Provider>

  );
}
