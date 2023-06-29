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

export const EmailValid = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email can't be empty"),
});

export const PasswordConfirmValid = Yup.object().shape({
  newpassword: Yup.string()
    .min(6, "New Password at least 6 characters")
    .max(60, "New Password max 60 characters")
    .required("New Password can't be empty")
    .matches(/(?=.*[a-z])/, "New Password must contain a lowercase")
    .matches(/(?=.*[A-Z])/, "New Password must contain a uppercase")
    .matches(/(?=.*[0-9])/, "New Password must contain a number."),
  confirmpassword: Yup.string()
    .oneOf(
      [Yup.ref("newpassword"), null],
      "Confirmation new password does'nt match"
    )
    .required("Confirmation new password required"),
});
