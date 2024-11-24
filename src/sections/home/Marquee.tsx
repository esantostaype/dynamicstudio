import Marquee from 'react-fast-marquee'

export const MarqueeSection = () => {
  const items = [
    {
      title: "Flexiable Price"
    },
    {
      title: "Tailored Web Solutions"
    },
    {
      title: "Scalable E-Commerce Platforms"
    },
    {
      title: "Custom Software Development"
    },
    {
      title: "Innovative Branding Strategies"
    }
  ]
  return (
    <Marquee className='text-[8rem] my-20 md:my-32'>
      <ul className="flex gap-16">
        { items.map(( item ) => (
          <li className="pl-16 relative">
            <span className="size-3 bg-white absolute rounded-md left-0 top-1/2 -translate-y-1/2"></span>
            { item.title }
          </li>
        ))}
      </ul>
    </Marquee>
  )
}