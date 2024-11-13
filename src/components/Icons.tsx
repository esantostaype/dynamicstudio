interface Props {
  fill?: string
  width?: string
  children?: React.ReactNode
}

const Icon: React.FC<Props> = ({ width = "32px", fill, children }) => {
  return (
    <svg viewBox="0 0 32 32" width={width} fill={`${fill ? `var(--${fill})` : "currentColor"}`}>
      { children }
    </svg>
  )
}

export const User = ({ width, fill }: Props) => {
  return (
    <Icon width={width} fill={fill}>
      <path d="M16,16.4c5.3,0,8.1-2.9,8.2-8.2C24.1,3,21.1,0,16,0,10.8,0,7.8,3.2,7.8,8.2s3,8.2,8.2,8.3h0ZM16,2.9c3.5,0,5.2,1.7,5.3,5.3,0,3.7-1.6,5.3-5.3,5.3-3.6,0-5.2-1.6-5.3-5.3,0-3.7,1.7-5.3,5.3-5.3Z M16,18.4c-7.7,0-11.9,4.2-12.1,12.1,0,.8.6,1.5,1.4,1.5.8,0,1.5-.6,1.5-1.4.1-6.3,3-9.2,9.2-9.2,6.1,0,9.1,3.1,9.2,9.2,0,.8.7,1.4,1.5,1.4h0c.8,0,1.4-.7,1.4-1.5-.1-7.8-4.4-12.1-12.1-12.1h0Z" />
    </Icon>
  )
}

export const Arrow = ({ width, fill }: Props) => {
  return (
    <Icon width={width} fill={fill}>
      <path d="M32,16h0c0-1.2-.5-2.4-1.3-3.2L20.8,3c-.9-.9-2.3-.9-3.2,0-.9.9-.9,2.3,0,3.2,0,0,0,0,0,0l7.5,7.5H2.3c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h22.9l-7.5,7.5c-.9.9-.9,2.3,0,3.2.9.9,2.3.9,3.2,0l9.8-9.8c.9-.9,1.3-2,1.3-3.2Z" />
    </Icon>
  )
}