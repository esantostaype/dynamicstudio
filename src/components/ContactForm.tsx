import { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import { MainButton, Notification, Spinner, TextField } from "@/components";
import { ContactFormSchema } from "@/schema";
import autoAnimate from "@formkit/auto-animate";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  comments: string;
}

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const initialValues: FormData = {
    fullName: "",
    phone: "",
    email: "",
    comments: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetch("http://localhost:3000/api/contact-us", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            mode: "cors",
            credentials: "same-origin",
          });

          if (!response.ok) {
            setError(true);
            setTimeout(() => setError(false), 5000);
            throw new Error("Failed to send email");
          }
          setSubmitted(true);
          resetForm();
          setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
          setError(true);
          setTimeout(() => setError(false), 5000);
          console.error("Error sending email:", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, touched, values, isSubmitting }) => (
        <Form>
          <Spinner isActive={isSubmitting} />
          <div
            className="flex flex-col lg:flex-row flex-wrap gap-6"
            ref={parent}
          >
            {submitted && (
              <Notification
                type="success"
                message="Thank you for getting in touch with us! We will contact you soon to provide the information you need."
              />
            )}
            {error && (
              <Notification
                type="error"
                message="Failed to send email. Try again later."
              />
            )}
            <div className="flex-[0_0_100%]">
              <TextField
                label="Full Name"
                type="text"
                name="fullName"
                placeholder="Enter your Full Name"
                errors={errors.fullName}
                touched={touched.fullName}
                value={values.fullName}
              />
            </div>
            <div className="flex-1">
              <TextField
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                errors={errors.email}
                touched={touched.email}
                value={values.email}
              />
            </div>
            <div className="flex-1">
              <TextField
                label="Phone"
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                errors={errors.phone}
                touched={touched.phone}
                value={values.phone}
              />
            </div>
            <div className="flex-[0_0_100%]">
              <TextField
                typeField="textarea"
                label="Comments"
                name="comments"
                placeholder="Enter your Comments"
                errors={errors.comments}
                touched={touched.comments}
                value={values.comments}
              />
            </div>
            <div className="flex-[0_0_100%] flex justify-end">
              <MainButton>Send Message</MainButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
