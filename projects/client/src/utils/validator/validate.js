import Swal from "sweetalert2";

export const profileFormValidator = (profileInformation) => {
  const { nickname, gender, birthDate } = profileInformation;
  if (!nickname) {
    return Swal.fire({
      icon: "error",
      text: `Nickname is required`,
    });
  } else if (nickname.length < 4) {
    return Swal.fire({
      icon: "error",
      text: `Nickname min 4`,
    });
  } else if (!gender) {
    return Swal.fire({
      icon: "error",
      text: `Gender is required`,
    });
  } else if (!birthDate) {
    return Swal.fire({
      icon: "error",
      text: `Birthdate is required`,
    });
  } else return false;
};
