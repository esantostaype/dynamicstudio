import { useState } from "react"
import { Formik, Form } from "formik"
import { MainButton, Notification, Spinner, TextField } from "@/components"
import { ContactFormSchema } from "@/schema"

interface FormData {
  fullName: string
  phone: string
  email: string
  comments: string
}

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const initialValues: FormData = {
    fullName: "",
    phone: "",
    email: "",
    comments: ""
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          setError(false)
          const response = await fetch(`https://backend.dynamicstudio.us/api/contact-us`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(values),
            mode: 'cors',
            credentials: 'same-origin'
          })

          let data
          try {
            data = await response.json()
          } catch (e) {
            console.error('Error parsing response:', e)
            throw new Error('Invalid server response')
          }

          if (!response.ok) {
            throw new Error(data.error || 'Failed to send email')
          }

          setSubmitted(true)
          resetForm()
          setTimeout(() => setSubmitted(false), 5000)
        } catch (error) {
          console.error('Error sending email:', error)
          setError(true)
          setTimeout(() => setError(false), 5000)
        } finally {
          setSubmitting(false)
        }
      }}
    >
      {({ errors, touched, values, isSubmitting }) => (
        <Form>
          <Spinner isActive={isSubmitting} />
          <div className="flex flex-col lg:flex-row flex-wrap gap-8">
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
  )
}
