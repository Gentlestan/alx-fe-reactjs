import React from "react";
import { useFormik } from "formik";

function FormikForm() {
  const validate = (values) => {
    let errors = {};

    if (!values.username.trim()) {
      errors.username = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be greater than 6";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password mismatch";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Form submitted successfully:", values);
    },
  });

  const el = React.createElement;

  return el(
    "div",
    { className: "flex justify-center items-center min-h-screen bg-gray-50" },
    el(
      "form",
      {
        onSubmit: formik.handleSubmit,
        className: "flex flex-col gap-4 p-8 rounded-lg shadow-lg bg-white w-full max-w-md",
      },
      // Name
      el(
        "div",
        { className: "flex items-center gap-2" },
        el("label", { htmlFor: "username", className: "w-32 font-bold" }, "Name:"),
        el("input", {
          type: "text",
          id: "username",
          name: "username",
          ...formik.getFieldProps("username"),
          className: "border p-2 rounded w-full",
        }),
        formik.touched.username && formik.errors.username
          ? el("span", { className: "text-red-500 text-sm" }, formik.errors.username)
          : null
      ),
      // Email
      el(
        "div",
        { className: "flex items-center gap-2" },
        el("label", { htmlFor: "email", className: "w-32 font-bold" }, "Email:"),
        el("input", {
          type: "email",
          id: "email",
          name: "email",
          ...formik.getFieldProps("email"),
          className: "border p-2 rounded w-full",
        }),
        formik.touched.email && formik.errors.email
          ? el("span", { className: "text-red-500 text-sm" }, formik.errors.email)
          : null
      ),
      // Password
      el(
        "div",
        { className: "flex items-center gap-2" },
        el("label", { htmlFor: "password", className: "w-32 font-bold" }, "Password:"),
        el("input", {
          type: "password",
          id: "password",
          name: "password",
          ...formik.getFieldProps("password"),
          className: "border p-2 rounded w-full",
        }),
        formik.touched.password && formik.errors.password
          ? el("span", { className: "text-red-500 text-sm" }, formik.errors.password)
          : null
      ),
      // Confirm Password
      el(
        "div",
        { className: "flex items-center gap-2" },
        el("label", { htmlFor: "confirmPassword", className: "w-32 font-bold" }, "Confirm Password:"),
        el("input", {
          type: "password",
          id: "confirmPassword",
          name: "confirmPassword",
          ...formik.getFieldProps("confirmPassword"),
          className: "border p-2 rounded w-full",
        }),
        formik.touched.confirmPassword && formik.errors.confirmPassword
          ? el("span", { className: "text-red-500 text-sm" }, formik.errors.confirmPassword)
          : null
      ),
      // Submit button
      el(
        "button",
        {
          type: "submit",
          className: "bg-blue-500 hover:bg-blue-600 text-white p-2 rounded font-semibold",
        },
        "Register"
      )
    )
  );
}

export default FormikForm;
