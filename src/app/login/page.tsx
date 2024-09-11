'use client'

import { usePathname } from 'next/navigation'


const Page = () => {
  const pathname = usePathname()
  return (
    <>
      <p>La ruta actual es: {pathname}</p>
   
    </>
  )
}
export default Page
