import * as Yup from 'yup';

export const ContactFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Your full name must have at least 2 characters')
    .max(48, 'Your full name must not exceed 48 characters')
    .required('This field is required'),
  email: Yup.string()
    .email('This is not a valid email')
    .required('This field is required')
})