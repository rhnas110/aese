import { Home } from "./Home/Home";
import { Register } from "./Auth/Register/Register";
import { Login } from "./Auth/Login/Login";
import { ResetPassword } from "./Auth/ResetPassword/ResetPassword";

import { Account } from "./Profile/Account";
import { NotFound } from "./NotFound/NotFound";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// custom title
function Page({ children }) {
  return <>{children}</>;
}

// Auth
function RegisterPage() {
  useDocumentTitle("Create an account | aese");
  return <Page children={<Register />} />;
}
function LoginPage() {
  useDocumentTitle("Login | aese");
  return <Page children={<Login />} />;
}
function ResetPasswordPage() {
  useDocumentTitle("Reset password | aese");
  return <Page children={<ResetPassword />} />;
}
// End of Auth

function AccountPage() {
  return <Page children={<Account />} />;
}

function NotFoundPage() {
  useDocumentTitle("aese not found");
  return <Page children={<NotFound />} />;
}
// end of custom title

export {
  Home,
  RegisterPage,
  LoginPage,
  ResetPasswordPage,
  NotFoundPage,
  AccountPage,
};
