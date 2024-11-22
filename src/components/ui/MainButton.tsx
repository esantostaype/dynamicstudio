import { Arrow } from '@/components/Icons'

export const MainButton = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <button className="group flex font-bold gap-3 items-center px-6 md:px-8 py-3 rounded-[4rem] dyn-gradient md:text-lg text-background">
      { children }
      <div className="group-hover:ml-2 group-hover:-mr-2 transition-all duration-300 ease-in-out">
        <Arrow width='16' />
      </div>
    </button>
  )
}