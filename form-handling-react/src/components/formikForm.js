import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be greater than 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password mismatch")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted successfully:", values);
    },
  });

  return React.createElement(
    "div",
    { className: "flex justify-center items-center min-h-screen bg-gray-50" },
    React.createElement(
      "form",
      {
        onSubmit: formik.handleSubmit,
        className:
          "flex flex-col gap-4 p-8 rounded-lg shadow-lg bg-white w-full max-w-md",
      },
      // Username
      React.createElement(
        "div",
        { className: "flex flex-col" },
        React.createElement("label", { htmlFor: "username", className: "font-bold" }, "Name:"),
        React.createElement("input", {
          type: "text",
          id: "username",
          name: "username",
          value: formik.values.username,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          className: "border p-2 rounded w-full",
        }),
        React.createElement(
          "span",
          { className: "text-red-500 text-sm" },
          formik.touched.username && formik.errors.username ? formik.errors.username : null
        )
      ),
      // Email
      React.createElement(
        "div",
        { className: "flex flex-col" },
        React.createElement("label", { htmlFor: "email", className: "font-bold" }, "Email:"),
        React.createElement("input", {
          type: "email",
          id: "email",
          name: "email",
          value: formik.values.email,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          className: "border p-2 rounded w-full",
        }),
        React.createElement(
          "span",
          { className: "text-red-500 text-sm" },
          formik.touched.email && formik.errors.email ? formik.errors.email : null
        )
      ),
      // Password
      React.createElement(
        "div",
        { className: "flex flex-col" },
        React.createElement("label", { htmlFor: "password", className: "font-bold" }, "Password:"),
        React.createElement("input", {
          type: "password",
          id: "password",
          name: "password",
          value: formik.values.password,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          className: "border p-2 rounded w-full",
        }),
        React.createElement(
          "span",
          { className: "text-red-500 text-sm" },
          formik.touched.password && formik.errors.password ? formik.errors.password : null
        )
      ),
      // Confirm Password
      React.createElement(
        "div",
        { className: "flex flex-col" },
        React.createElement("label", { htmlFor: "confirmPassword", className: "font-bold" }, "Confirm Password:"),
        React.createElement("input", {
          type: "password",
          id: "confirmPassword",
          name: "confirmPassword",
          value: formik.values.confirmPassword,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
          className: "border p-2 rounded w-full",
        }),
        React.createElement(
          "span",
          { className: "text-red-500 text-sm" },
          formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null
        )
      ),
      // Submit button
      React.createElement(
        "button",
        { type: "submit", className: "bg-blue-500 hover:bg-blue-600 text-white p-2 rounded font-semibold" },
        "Register"
      )
    )
  );
}

export default FormikForm;
