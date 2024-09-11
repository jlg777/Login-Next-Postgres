'use client'

import { usePathname } from 'next/navigation'
import Loginform from '../ui/Registerform'


const Page = () => {
  const pathname = usePathname()
  return (
    <>
      <p>La ruta actual es: {pathname}</p>
      <Loginform />
    </>
  )
}
export default Page
