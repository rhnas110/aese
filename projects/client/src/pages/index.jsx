import { Home } from "./Home/Home";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";

import { NotFound } from "./NotFound/NotFound";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// custom title
function Page({ children }) {
  return <>{children}</>;
}

function RegisterPage() {
  useDocumentTitle("Create an account | aese");
  return <Page children={<Register />} />;
}
function LoginPage() {
  useDocumentTitle("Login | aese");
  return <Page children={<Login />} />;
}
function NotFoundPage() {
  useDocumentTitle("aese not found");
  return <Page children={<NotFound />} />;
}
// end of custom title

export { Home, RegisterPage, LoginPage, NotFoundPage };
