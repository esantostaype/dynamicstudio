import * as Yup from 'yup'

export const ContactFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .min( 2, 'Tu nombre completo debe tener al menos 2 caracteres' )
    .max( 48, 'Tu nombre completo no debe ser mayor a 48 caracteres' )
    .required( 'Este campo es requerido' ),
	phone: Yup.string()
		.matches(/^[9]\d{8}$/, 'No es teléfono válido')
		.required( 'Este campo es requerido' ),
	email: Yup.string()
		.email('No es un Email válido')
		.required( 'Este campo es requerido' ),
	comments: Yup.string()
		.required( 'Este campo es requerido' )	
})