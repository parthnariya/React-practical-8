import * as Yup from "yup";
const phoneRegExp = /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/;
export const validate = Yup.object({
  profilePicture: Yup.mixed()
    .required("Profile Picture is Required")
    .test(
      "fileSize",
      "image size is too large",
      (value) => {
        // console.log(value.size)
        return !value || value.size <= 200000}
    ).test("fileType", "image type should be jpg or png only ", (value) => {
      console.log(value)
      return (
        !value ||
        (value !== null && ["image/jpg", "image/png","image/jpeg"].includes(value.type))
      );
    }),
  name: Yup.string()
    .min(15, "Must be 15 characters or more")
    .required("Name is Required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "PhoneNo is not valid")
    .required("PhoneNo is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});
