import * as Yup from "yup";

export const FormValid = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email can't be empty"),
  password: Yup.string()
    .min(6, "Password at least 6 characters")
    .max(60, "Password max 60 characters")
    .required("Password can't be empty")
    .matches(/(?=.*[a-z])/, "Password must contain a lowercase")
    .matches(/(?=.*[A-Z])/, "Password must contain a uppercase")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
});
