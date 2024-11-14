import { Drawer } from 'vaul'

interface Props {
  nav: any[]
}

export const NavMobile = ({ nav }: Props) => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="size-10 -mr-2 items-center justify-center flex xl:hidden">
        <div className="nav-button__wrapper">
          <span className="nav-button__dot"></span>
          <span className="nav-button__dot"></span>
          <span className="nav-button__dot"></span>
          <span className="nav-button__dot"></span>
          <span className="nav-button__dot"></span>
          <span className="nav-button__dot"></span>
          <span className="nav-button__dot"></span>
          <span className="nav-button__dot"></span>
          <span className="nav-button__dot"></span>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed h-dvh w-full inset-0 bg-[rgba(10,10,32,0.8)]  z-[9999]" />
        <Drawer.Content
          className="-right-8 top-4 h-[calc(100dvh-1rem)] fixed z-[99999] w-80 flex backdrop-blur-2xl p-8 border-l border-l-[rgba(255,255,255,0.1)] border-t border-t-[rgba(255,255,255,0.1)] rounded-tl-lg"
        >
          <nav className="flex flex-col gap-4">
            { nav.map(({ label, path, active }) => (
              <a className={`hover:text-dyn-green-400 py-2 px-4 relative transition-all duration-300 ${ active ? "text-dyn-green-400" : "" }`} href={ path }>
                { label }
              </a>
              ))
            }
          </nav>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}