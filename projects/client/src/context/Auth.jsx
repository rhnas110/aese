import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  function handleAuth(data) {
    setAuth(data);
  }
  return (
    <AuthContext.Provider value={{ auth, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
