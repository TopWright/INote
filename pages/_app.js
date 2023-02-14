import "@/styles/globals.css";

import { AuthProvider } from "@/src/context/auth-context";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component { ...pageProps } />
    </AuthProvider>
  );
}
