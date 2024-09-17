'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx';


const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className="flex  gap-4">
      {/*<Link className={`link ${pathname === '/login' ? 'active' : ''}`} href="/login">
        login
      </Link>*/}
      <Link className={clsx('link', { 'active': pathname === '/login' })} href="/login">
        login
      </Link>

      <Link
        className={clsx('link', { 'active': pathname === '/register' })} href="/register"
      >
        register
      </Link>
    </nav>
  )
}
export default Nav
