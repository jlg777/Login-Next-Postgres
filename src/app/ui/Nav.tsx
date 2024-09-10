'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className="flex  gap-4">
      <Link className={`link ${pathname === '/login' ? 'active' : ''}`} href="/login">
        login
      </Link>

      <Link className={`link ${pathname === '/register' ? 'active' : ''}`} href="/register">
        register
      </Link>
    </nav>
  )
}
export default Nav
