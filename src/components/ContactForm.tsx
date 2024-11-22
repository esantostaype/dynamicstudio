import { useState } from 'react'
import { Formik, Form } from 'formik'
import { Spinner, MainButton, TextField } from '@/components'
import { ContactFormSchema } from '@/schema'

interface FormData {
  fullName: string
  phone: string
  email: string
  comments: string
}

export const ContactForm = () => {

  const [ submitted, setSubmitted ] = useState( false )

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
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: values }),
          });

          if (!response.ok) {
            throw new Error('Failed to send email');
          }

          setSubmitted(true);
          resetForm();
          setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
          console.error('Error sending email:', error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, touched, values, isSubmitting, handleChange, setFieldValue }) => (
        <Form>
          <Spinner isActive={ isSubmitting } />
          { submitted && "Sent" }
          <div className='flex flex-col lg:flex-row flex-wrap gap-6'>
            <div className='flex-[0_0_100%]'>
            <TextField
              label="Nombre Completo"
              type="text"
              name="fullName"
              placeholder="Ingresa tu Nombre Completo"
              errors={ errors.fullName }
              touched={ touched.fullName }
              value={ values.fullName }
            />
            </div>
            <div className='flex-1'>
            <TextField
              label="Teléfono"
              type="tel"
              name="phone"
              placeholder="Ingresa tu Teléfono"
              errors={ errors.phone }
              touched={ touched.phone }
              value={ values.phone }
            />
            </div>
            <div className='flex-1'>
              <TextField
                label="Email"
                type="email"
                name="email"
                placeholder="Ingresa tu Email"
                errors={ errors.email }
                touched={ touched.email }
                value={ values.email }
              />
            </div>
            <div className='flex-[0_0_100%]'>
              <TextField
                typeField="textarea"
                label="Comentarios"
                name="comments"
                placeholder="Ingresa tus Comentarios"
                errors={ errors.comments }
                touched={ touched.comments }
                value={ values.comments }
              />
            </div>
            <div className='flex-[0_0_100%] flex justify-end'>                
              <MainButton>Send Message</MainButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
