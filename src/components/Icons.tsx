interface Props {
  fill?: string
  width?: string
  viewBox?: string
  children?: React.ReactNode
}

const Icon = ({ width = "32px", viewBox="0 0 32 32", fill, children }: Props) => {
  return (
    <svg viewBox={ viewBox } width={ width } fill={`${fill ? `var(--${ fill })` : "currentColor"}`}>
      { children }
    </svg>
  )
}

export const Websites = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M25.3,1.3H6.7C3,1.3,0,4.3,0,8v16c0,3.7,3,6.7,6.7,6.7h18.7c3.7,0,6.7-3,6.7-6.7V8c0-3.7-3-6.7-6.7-6.7ZM6.7,4h18.7c2.2,0,4,1.8,4,4v1.3H2.7v-1.3c0-2.2,1.8-4,4-4ZM25.3,28H6.7c-2.2,0-4-1.8-4-4v-12h26.7v12c0,2.2-1.8,4-4,4ZM25.3,17.3c0,.7-.6,1.3-1.3,1.3H8c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3h16c.7,0,1.3.6,1.3,1.3ZM20,22.7c0,.7-.6,1.3-1.3,1.3h-10.7c-.7,0-1.3-.6-1.3-1.3s.6-1.3,1.3-1.3h10.7c.7,0,1.3.6,1.3,1.3ZM4,6.7c0-.7.6-1.3,1.3-1.3s1.3.6,1.3,1.3-.6,1.3-1.3,1.3-1.3-.6-1.3-1.3ZM8,6.7c0-.7.6-1.3,1.3-1.3s1.3.6,1.3,1.3-.6,1.3-1.3,1.3-1.3-.6-1.3-1.3ZM12,6.7c0-.7.6-1.3,1.3-1.3s1.3.6,1.3,1.3-.6,1.3-1.3,1.3-1.3-.6-1.3-1.3Z"/>
    </Icon>
  )
}

export const ECommerce = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <circle cx="9.3" cy="29.3" r="2.7"/>
      <circle cx="22.7" cy="29.3" r="2.7"/>
      <path d="M31.6,1.8c-.5-.5-1.4-.5-1.9,0l-6.9,6.9-2.1-2.2c-.5-.5-1.4-.5-1.9,0-.5.5-.5,1.4,0,1.9l2.2,2.2c.5.5,1.1.8,1.8.8h0c.7,0,1.3-.3,1.8-.7l7-7c.5-.5.5-1.4,0-1.9Z M29.2,12c-.7-.1-1.4.4-1.5,1.1,0,0,0,0,0,0l-.2.9c-.3,1.9-2,3.3-3.9,3.3H7.2l-1.3-10.7h8.7c.7,0,1.3-.6,1.3-1.3s-.6-1.3-1.3-1.3H5.7v-.5C5.4,1.5,3.7,0,1.6,0h-.3C.6,0,0,.6,0,1.3s.6,1.3,1.3,1.3h.3c.7,0,1.2.5,1.3,1.2l1.8,15.6c.4,3.4,3.2,5.9,6.6,5.9h13.9c.7,0,1.3-.6,1.3-1.3s-.6-1.3-1.3-1.3h-13.9c-1.7,0-3.2-1.1-3.8-2.7h15.9c3.2,0,6-2.3,6.6-5.5l.2-.9c.1-.7-.4-1.4-1.1-1.5Z"/>
    </Icon>
  )
}

export const Software = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M9.3,0h-4C2.4,0,0,2.4,0,5.3v4c0,2.9,2.4,5.3,5.3,5.3h4c2.9,0,5.3-2.4,5.3-5.3v-4c0-2.9-2.4-5.3-5.3-5.3ZM12,9.3c0,1.5-1.2,2.7-2.7,2.7h-4c-1.5,0-2.7-1.2-2.7-2.7v-4c0-1.5,1.2-2.7,2.7-2.7h4c1.5,0,2.7,1.2,2.7,2.7v4Z M9.3,17.3h-4c-2.9,0-5.3,2.4-5.3,5.3v4c0,2.9,2.4,5.3,5.3,5.3h4c2.9,0,5.3-2.4,5.3-5.3v-4c0-2.9-2.4-5.3-5.3-5.3ZM12,26.7c0,1.5-1.2,2.7-2.7,2.7h-4c-1.5,0-2.7-1.2-2.7-2.7v-4c0-1.5,1.2-2.7,2.7-2.7h4c1.5,0,2.7,1.2,2.7,2.7v4Z M26.7,17.3h-4c-2.9,0-5.3,2.4-5.3,5.3v4c0,2.9,2.4,5.3,5.3,5.3h4c2.9,0,5.3-2.4,5.3-5.3v-4c0-2.9-2.4-5.3-5.3-5.3ZM29.3,26.7c0,1.5-1.2,2.7-2.7,2.7h-4c-1.5,0-2.7-1.2-2.7-2.7v-4c0-1.5,1.2-2.7,2.7-2.7h4c1.5,0,2.7,1.2,2.7,2.7v4Z M18.7,9.3h4v4c0,.7.6,1.3,1.3,1.3s1.3-.6,1.3-1.3v-4h4c.7,0,1.3-.6,1.3-1.3s-.6-1.3-1.3-1.3h-4V2.7c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3,1.3v4h-4c-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3Z"/>
    </Icon>
  )
}

export const Branding = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M30.1,16.7l-11.6-11.5c-1.1-1.1-2.7-1.7-4.3-1.5l-7.7.9L2.3.4C1.8-.1.9-.1.4.4-.1.9-.1,1.8.4,2.3l4.2,4.2-.9,8.1c-.1,1.5.4,3,1.5,4.1l11.6,11.5c1.2,1.2,2.8,1.9,4.5,1.9h0c1.7,0,3.3-.7,4.5-1.9l4.3-4.3c2.5-2.5,2.5-6.6,0-9.1h0ZM28.2,23.9l-4.3,4.3c-.7.7-1.7,1.1-2.7,1.1h0c-1,0-1.9-.4-2.7-1.1l-11.6-11.5c-.5-.5-.8-1.2-.7-1.9l.7-6,2.5,2.5c0,.2,0,.4,0,.7,0,1.5,1.2,2.7,2.7,2.7s2.7-1.2,2.7-2.7-1.2-2.7-2.7-2.7-.5,0-.7,0l-2.5-2.5,5.6-.6h0c.8-.1,1.5.2,2.1.7l11.6,11.5c1.5,1.5,1.5,3.9,0,5.3h0ZM22.9,17.1c-.5-.5-1.4-.5-1.9,0l-4,4c-.5.5-.5,1.4,0,1.9l3.3,3.3c.3.3.6.4.9.4s.7-.1.9-.4l4-4c.5-.5.5-1.4,0-1.9,0,0-3.3-3.3-3.3-3.3ZM21.3,23.4l-1.4-1.4,2.1-2.1,1.4,1.4s-2.1,2.1-2.1,2.1Z"/>
    </Icon>
  )
}

export const User = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M16,16.4c5.3,0,8.1-2.9,8.2-8.2C24.1,3,21.1,0,16,0,10.8,0,7.8,3.2,7.8,8.2s3,8.2,8.2,8.3h0ZM16,2.9c3.5,0,5.2,1.7,5.3,5.3,0,3.7-1.6,5.3-5.3,5.3-3.6,0-5.2-1.6-5.3-5.3,0-3.7,1.7-5.3,5.3-5.3Z M16,18.4c-7.7,0-11.9,4.2-12.1,12.1,0,.8.6,1.5,1.4,1.5.8,0,1.5-.6,1.5-1.4.1-6.3,3-9.2,9.2-9.2,6.1,0,9.1,3.1,9.2,9.2,0,.8.7,1.4,1.5,1.4h0c.8,0,1.4-.7,1.4-1.5-.1-7.8-4.4-12.1-12.1-12.1h0Z" />
    </Icon>
  )
}

export const Arrow = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M32,16h0c0-1.2-.5-2.4-1.3-3.2L20.8,3c-.9-.9-2.3-.9-3.2,0-.9.9-.9,2.3,0,3.2,0,0,0,0,0,0l7.5,7.5H2.3c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h22.9l-7.5,7.5c-.9.9-.9,2.3,0,3.2.9.9,2.3.9,3.2,0l9.8-9.8c.9-.9,1.3-2,1.3-3.2Z" />
    </Icon>
  )
}

export const Chat = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M25.3,5.3h-1.5c-.6-3-3.3-5.3-6.5-5.3H6.7C3,0,0,3,0,6.7v17.1c0,1.1.6,2,1.5,2.5.4.2.9.3,1.4.3s1.1-.2,1.6-.5l3.9-2.6c.9,2.6,3.4,4.4,6.3,4.4h7.6l5.3,3.5c.5.3,1,.5,1.6.5s.9-.1,1.4-.3c.9-.5,1.5-1.5,1.5-2.5V12c0-3.7-3-6.7-6.7-6.7h0ZM3,24s-.1,0-.2,0c-.1,0-.1-.1-.1-.2V6.7c0-2.2,1.8-4,4-4h10.7c2.2,0,4,1.8,4,4v9.3c0,2.2-1.8,4-4,4h-8c-.4,0-.7.2-.8.2l-5.6,3.7h0ZM29.3,29.1s0,.1-.1.2c-.1,0-.2,0-.2,0l-5.6-3.7c-.2-.1-.5-.2-.7-.2h-8c-1.7,0-3.2-1.1-3.8-2.7h6.4c3.7,0,6.7-3,6.7-6.7v-8h1.3c2.2,0,4,1.8,4,4v17.1h0Z"/>
    </Icon>
  )
}

export const Close = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M18.6,16L31.4,3.2c.6-.6.8-1.4.4-2.1-.6-1.2-2.1-1.3-2.9-.5l-12.9,12.9L3.2.6C2.6,0,1.7-.2,1,.2-.2.8-.3,2.3.5,3.1l12.9,12.9L.6,28.8c-.6.6-.8,1.4-.4,2.1.6,1.2,2.1,1.3,2.9.5l12.9-12.9,12.8,12.8c.6.6,1.4.8,2.1.4,1.2-.6,1.3-2.1.5-2.9l-12.9-12.9Z"/>
    </Icon>
  )
}

export const ErrorIcon = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill } viewBox="0 0 24 24">
      <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    </Icon>
  )
}

export const WarningIcon = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill } viewBox="0 0 24 24">
      <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
    </Icon>
  )
}

export const InfoIcon = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill } viewBox="0 0 24 24">
      <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"/>
    </Icon>
  )
}

export const SuccessIcon = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill } viewBox="0 0 24 24">
      <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"/>
    </Icon>
  )
}

export const Location = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M16,8c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3,5.3-2.4,5.3-5.3-2.4-5.3-5.3-5.3ZM16,16c-1.5,0-2.7-1.2-2.7-2.7s1.2-2.7,2.7-2.7,2.7,1.2,2.7,2.7-1.2,2.7-2.7,2.7Z M16,0C8.6,0,2.6,6,2.6,13.4c0,3.4,2.6,8.7,7.7,15.7,1.3,1.9,3.5,2.9,5.7,2.9,2.3,0,4.4-1.1,5.7-2.9,5.1-7,7.7-12.3,7.7-15.7C29.4,6,23.4,0,16,0ZM19.4,27.4c-.3.4-.6.7-.9.9-1.9,1.4-4.5.9-5.9-.9-4.6-6.3-7.1-11.3-7.1-14,0-5.8,4.7-10.5,10.5-10.5,5.8,0,10.5,4.7,10.5,10.5,0,2.7-2.5,7.6-7.1,14Z"/>
    </Icon>
  )
}

export const Email = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M25.3,1.3H6.7C3,1.3,0,4.3,0,8v16c0,3.7,3,6.7,6.7,6.7h18.7c3.7,0,6.7-3,6.7-6.7V8c0-3.7-3-6.7-6.7-6.7ZM6.7,4h18.7c1.6,0,3.1,1,3.7,2.5l-10.2,10.2c-1.6,1.6-4.1,1.6-5.7,0L3,6.5c.6-1.5,2.1-2.5,3.7-2.5ZM25.3,28H6.7c-2.2,0-4-1.8-4-4v-14l8.6,8.6c2.6,2.6,6.8,2.6,9.4,0l8.6-8.6v14c0,2.2-1.8,4-4,4Z"/>
    </Icon>
  )
}

export const Phone = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M17.3,1.3C17.3.6,17.9,0,18.6,0c7.4,0,13.3,6,13.4,13.4,0,.7-.6,1.3-1.3,1.3s-1.3-.6-1.3-1.3c0-5.9-4.8-10.7-10.7-10.7-.7,0-1.3-.6-1.3-1.3ZM18.6,8c3,0,5.3,2.4,5.3,5.3s.6,1.3,1.3,1.3,1.3-.6,1.3-1.3c0-4.4-3.6-8-8-8-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3ZM30.8,22.4c1.6,1.6,1.6,4.2,0,5.8l-1.2,1.4C18.6,40.1-8,13.5,2.3,2.5l1.5-1.3c1.6-1.6,4.2-1.5,5.8,0,0,0,2.5,3.3,2.5,3.3,1.5,1.6,1.5,4.1,0,5.7l-1.5,1.9c1.7,4.2,5.1,7.5,9.3,9.3l2-1.6c1.6-1.5,4.1-1.5,5.7,0,0,0,3.2,2.5,3.3,2.5ZM29,24.3s-3.2-2.5-3.2-2.5c-.6-.6-1.5-.6-2.1,0,0,0-2.7,2.2-2.7,2.2-.4.3-.9.4-1.3.2-5.4-2-9.7-6.3-11.8-11.8-.2-.4-.1-1,.2-1.3,0,0,2.1-2.7,2.2-2.7.6-.6.6-1.5,0-2.1,0,0-2.5-3.2-2.5-3.2-.6-.5-1.5-.5-2,0l-1.5,1.3c-7.5,9.1,15.5,30.8,23.5,23.3l1.2-1.4c.6-.5.6-1.5.1-2.1h0Z"/>
    </Icon>
  )
}

export const Facebook = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M23.4,10.4h-5.1v-3.3c0-1.2.8-1.5,1.4-1.5h3.6V0h-4.9c-5.5,0-6.7,4.1-6.7,6.7v3.7h-3.2v5.7h3.2v16h6.6v-16h4.5l.6-5.7Z"/>
    </Icon>
  )
}

export const X = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M19,13.5L30.6,0h-2.8l-10.1,11.8L9.7,0H.4l12.2,17.8L.4,32h2.8l10.7-12.4,8.5,12.4h9.3l-12.7-18.4h0ZM15.2,17.9l-1.2-1.8L4.1,2.1h4.2l7.9,11.4,1.2,1.8,10.3,14.8h-4.2l-8.4-12.1h0Z"/>
    </Icon>
  )
}

export const Instagram = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M16,7.7c-4.5,0-8.3,3.7-8.3,8.3s3.7,8.3,8.3,8.3,8.3-3.7,8.3-8.3-3.7-8.3-8.3-8.3ZM16,21.2c-2.9,0-5.3-2.4-5.3-5.3s2.4-5.3,5.3-5.3,5.3,2.4,5.3,5.3-2.4,5.3-5.3,5.3Z"/>
      <circle cx="24.6" cy="7.5" r="1.9"/>
      <path d="M29.4,2.6C27.7.9,25.4,0,22.6,0h-13.3C3.7,0,0,3.7,0,9.4v13.2c0,2.8.9,5.2,2.7,6.9,1.7,1.7,4.1,2.5,6.7,2.5h13.2c2.8,0,5.1-.9,6.8-2.5,1.7-1.7,2.6-4.1,2.6-6.8v-13.3c0-2.7-.9-5-2.6-6.7ZM29.2,22.6c0,2-.7,3.6-1.9,4.7s-2.8,1.7-4.7,1.7h-13.2c-1.9,0-3.5-.6-4.7-1.7-1.2-1.2-1.7-2.8-1.7-4.8v-13.2c0-1.9.6-3.5,1.7-4.7s2.8-1.7,4.7-1.7h13.3c1.9,0,3.5.6,4.7,1.7,1.1,1.2,1.7,2.8,1.7,4.6v13.3h0Z"/>
    </Icon>
  )
}

export const Tiktok = ({ width, fill }: Props) => {
  return (
    <Icon width={ width } fill={ fill }>
      <path d="M30,13.1c-2.8,0-5.4-.9-7.7-2.5v11.2c0,5.6-4.6,10.2-10.2,10.2-5.6,0-10.2-4.6-10.2-10.2,0-5.6,4.6-10.2,10.2-10.2.5,0,.9,0,1.4,0v5.6c-2.5-.8-5.1.6-5.8,3.1s.6,5.1,3.1,5.8,5.1-.6,5.8-3.1c.1-.5.2-.9.2-1.4V0h5.5c0,.5,0,.9.1,1.4h0c.4,2.1,1.6,3.9,3.4,5,1.2.8,2.7,1.3,4.2,1.3v5.5Z"/>
    </Icon>
  )
}