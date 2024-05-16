import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
    >
      <Form className={s.contForm}>
        <div className={s.inputWrapper}>
          <label htmlFor="name">Name</label>
          <Field name="name" />
          <ErrorMessage component="div" name="name" className={s.errorMsg} />
        </div>
        <div className={s.inputWrapper}>
          <label htmlFor="number">Number</label>
          <Field name="number" />
          <ErrorMessage component="div" name="number" className={s.errorMsg} />
        </div>
        <button type="submit" className={s.addContactBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
