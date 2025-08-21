import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // ✅ Validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be greater than 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password mismatch")
      .required("Confirm Password is required"),
  });

  // ✅ Formik setup
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 p-8 rounded-lg shadow-lg bg-white w-full max-w-md"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="username" className="font-bold">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            {...formik.getFieldProps("username")}
            className="border p-2 rounded w-full"
          />
          {formik.touched.username && formik.errors.username ? (
            <span className="text-red-500 text-sm">{formik.errors.username}</span>
          ) : null}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
            className="border p-2 rounded w-full"
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-red-500 text-sm">{formik.errors.email}</span>
          ) : null}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="font-bold">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...formik.getFieldProps("password")}
            className="border p-2 rounded w-full"
          />
          {formik.touched.password && formik.errors.password ? (
            <span className="text-red-500 text-sm">{formik.errors.password}</span>
          ) : null}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="font-bold">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...formik.getFieldProps("confirmPassword")}
            className="border p-2 rounded w-full"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <span className="text-red-500 text-sm">{formik.errors.confirmPassword}</span>
          ) : null}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default FormikForm;
