import { createContext, useContext, Context } from "react";
import useFirebaseAuth from "../config/firebaseAuth";

const authContext = createContext({
  authUser: null,
  loading: true,
  login: async () => {},
  signUp: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }) {
  const auth = useFirebaseAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authContext);
