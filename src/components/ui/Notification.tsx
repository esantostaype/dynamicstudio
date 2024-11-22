import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from '@/components/Icons'

type NotificationType = "error" | "warning" | "success" | "info"

interface Props {
  message: string
  type: NotificationType
  class?: string
}

export const Notification = ({ message, type, class:className }: Props) => {
  const getIcon = () => {
    switch (type) {
      case "error":
        return <ErrorIcon width={"22"} />
      case "warning":
        return <WarningIcon width={"22"} />
      case "success":
        return <SuccessIcon width={"22"} />
      case "info":
        return <InfoIcon width={"22"} />
      default:
        return null
    }
  }

  let colorTextClass = ""  
  let colorBgClass = ""
  
  switch ( type ) {
    case "error":
      colorTextClass = "text-red-500"
      colorBgClass = "bg-red-500"
      break
    case "warning":
      colorTextClass = "text-amber-500"
      colorBgClass = "bg-amber-500"
      break
    case "success":
      colorTextClass = "text-green-500"
      colorBgClass = "bg-green-500"
      break
    case "info":
      colorTextClass = "text-blue-500"
      colorBgClass = "bg-blue-500"
      break
    default:
      return null
  }

  return (
    <div className={`${ colorTextClass } ${ className || "" } w-full relative overflow-hidden rounded p-4`}>
      <div className="flex gap-2 relative z-20">
        <div className="flex-[0_0_22px]">{ getIcon() }</div>
        <p>{ message }</p>
      </div>
      <div className={`${ colorBgClass } absolute z-10 h-full w-full top-0 left-0 opacity-10`}></div>
    </div>
  )
}
