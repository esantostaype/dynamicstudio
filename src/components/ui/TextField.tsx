import { useState, type FC, type ChangeEvent, useEffect } from 'react'
import { ErrorMessage, Field } from 'formik'
import clsx from 'clsx'

export interface Props {
  label?: string
  type?: string
  typeField?: string
  name: string
  placeholder?: string
  asSelect?: boolean
  options?: { label: string; value: string }[]
  errors?: string
  touched?: boolean
  value?: any
  defaultValue?: string
  disabled?: boolean
  onChange?: (e: ChangeEvent<any>) => void
}

export const TextField: FC<Props> = ({
  type,
  typeField,
  label,
  touched,
  name,
  placeholder,
  asSelect,
  options = [],
  errors,
  value,
  disabled,
  onChange,
}) => {
  const [isActive, setIsActive] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    setIsFilled(!!value)
  }, [value])

  const hasError = errors && touched
  const isFloating = isActive || isFilled || (asSelect && !isActive)

  const handleFieldFocus = () => setIsActive(true)
  const handleFieldBlur = () => setIsActive(false)
  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFilled(!!e.target.value)
    onChange?.(e)
  }

  const labelClasses = clsx(
    'absolute pointer-events-none px-2 z-20 leading-4 transition-all',
    {
      'left-[10px]': true,
      'text-xs top-0': isFloating,
      'top-[26px]': !isFloating,
      'text-gray-400': !hasError && !isActive,
      'text-dynamicGreen': isActive && !hasError,
      'text-red-500': hasError,
      'group-hover:text-dynamicGreen': !hasError && !isActive,
    }
  )

  const inputClasses = clsx(
    'relative z-20 bg-transparent transition-all rounded px-4 outline-none w-full',
    {
      'h-32 pt-[20px]': typeField === "textarea",
      'h-16 pt-[6px]': typeField !== "textarea",
      'placeholder:opacity-100': isFloating || !label,
      'placeholder:opacity-0': !isFloating && label,
      'placeholder:text-gray-400': true,
    }
  )

  const legendClasses = clsx(
    'px-2 absolute z-10 top-0 left-0 w-full transition-all border-2 rounded',
    {
      'h-32': typeField === "textarea",
      'h-16': typeField !== "textarea",
      'border-[rgba(255,255,255,0.12)]': !isActive && !hasError,
      'border-dynamicGreen': isActive && !hasError,
      'border-red-500': hasError,
      'group-hover:border-dynamicGreen': !hasError && !isActive,
    }
  )

  const legendTextClasses = clsx(
    'text-xs opacity-0 invisible h-[16px] transition-all',
    {
      'px-2 w-auto': isActive || isFilled,
      'w-0 px-0': !isActive && !isFilled,
    }
  )

  return (
    <div
      className={clsx(
        'relative transition-all w-full group',
        { 'disabled': disabled }
      )}
      onFocus={handleFieldFocus}
      onBlur={handleFieldBlur}
      onChange={handleFieldChange}
    >
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      
      {asSelect ? (
        <>
          <Field
            as="select"
            name={name}
            className={`${inputClasses} px-1`}
            autoComplete="off"
            disabled={disabled}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
          <fieldset aria-hidden="true" className={legendClasses}>
            <legend className="px-2 text-xs opacity-0 invisible">
              {label}
            </legend>
          </fieldset>
        </>
      ) : (
        <>
          <Field
            as={typeField}
            type={type}
            name={name}
            className={inputClasses}
            autoComplete="off"
            disabled={disabled}
            value={value}
            placeholder={placeholder}
          />
          <fieldset aria-hidden="true" className={legendClasses}>
            <legend className={legendTextClasses}>
              {label}
            </legend>
          </fieldset>
        </>
      )}
      
      <ErrorMessage 
        name={name} 
        component="span" 
        className="text-xs text-red-500 mt-1 block text-left" 
      />
    </div>
  )
}