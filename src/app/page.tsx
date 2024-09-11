'use client'

import { usePathname } from "next/navigation"


const page = () => {
  const pathname = usePathname()
  return (
    <>
    <p>La ruta actual es: {pathname}</p>
    <div>page</div>
    </>
  )
}
export default page