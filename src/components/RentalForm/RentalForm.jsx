import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./RentalForm.module.css";

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
      date: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Booking info:", values, "for car", car.id);
      alert(`Thank you for booking ${car.brand} ${car.model}!`);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>Book your car now</h2>
      <p className={styles.formSubtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <input
        name="name"
        type="text"
        placeholder="Name*"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className={styles.input}
      />
      {formik.touched.name && formik.errors.name && (
        <p className={styles.error}>{formik.errors.name}</p>
      )}

      <input
        name="email"
        type="email"
        placeholder="Email*"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={styles.input}
      />
      {formik.touched.email && formik.errors.email && (
        <p className={styles.error}>{formik.errors.email}</p>
      )}

      <input
        name="date"
        type="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.date}
        className={styles.input}
      />
      {formik.touched.date && formik.errors.date && (
        <p className={styles.error}>{formik.errors.date}</p>
      )}

      <textarea
        name="comment"
        placeholder="Comment"
        onChange={formik.handleChange}
        value={formik.values.comment}
        className={styles.textarea}
      />

      <button type="submit" className={styles.button}>
        Send
      </button>
    </form>
  );
};

export default RentalForm;
