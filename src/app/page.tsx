'use client'

import { usePathname } from "next/navigation"

type Props = {}
const page = (props: Props) => {
  const pathname = usePathname()
  return (
    <>
    <p>La ruta actual es: {pathname}</p>
    <div>page</div>
    </>
  )
}
export default page