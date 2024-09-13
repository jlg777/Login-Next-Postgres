'use client'

import { usePathname } from 'next/navigation'
import LoginForm from '../ui/LoginForm'


const Page = () => {
  const pathname = usePathname()
  return (
    <>
      <p>La ruta actual es: {pathname}</p>
      <LoginForm />
    </>
  )
}
export default Page
