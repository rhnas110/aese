import { createContext, useState } from "react";

export const ShowPasswordContext = createContext();

export const ShowPasswordContextProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <ShowPasswordContext.Provider value={{ showPassword, handleShowPassword }}>
      {children}
    </ShowPasswordContext.Provider>
  );
};
