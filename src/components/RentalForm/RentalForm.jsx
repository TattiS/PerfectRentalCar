import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

import css from "./RentalForm.module.css";

const RentalForm = ({ car }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      date: Yup.string()
        .required("Required")
        .min(new Date().setHours(0, 0, 0, 0), "Date cannot be in the past"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Booking info:", values, "for car", car.id);
      alert(`Thank you for booking ${car.brand} ${car.model}!`);
      resetForm();
    },
  });
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
      <h2 className={css.formTitle}>Book your car now</h2>
      <p className={css.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <input
        name="name"
        type="text"
        placeholder="Name*"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className={css.input}
      />
      {formik.touched.name && formik.errors.name && (
        <p className={css.error}>{formik.errors.name}</p>
      )}

      <input
        name="email"
        type="email"
        placeholder="Email*"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={css.input}
      />
      {formik.touched.email && formik.errors.email && (
        <p className={css.error}>{formik.errors.email}</p>
      )}
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          formik.setFieldValue("date", date);
        }}
        onBlur={formik.handleBlur}
        name="date"
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
        placeholderText="Booking date*"
        className={css.input}
      />
      {formik.touched.date && formik.errors.date && (
        <p className={css.error}>{formik.errors.date}</p>
      )}

      <textarea
        name="comment"
        placeholder="Comment"
        onChange={formik.handleChange}
        value={formik.values.comment}
        className={css.textarea}
      />

      <button type="submit" className={css.button}>
        Send
      </button>
    </form>
  );
};

export default RentalForm;
