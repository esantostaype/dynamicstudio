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