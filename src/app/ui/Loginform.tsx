import { usePathname } from 'next/navigation'
import { createUser, State } from '../lib/actions'
import { useState } from 'react'

const Loginform = () => {
  const pathname = usePathname()

  const message =
    pathname === '/login'
      ? 'Favor ingrese para continuar.'
      : pathname === '/register'
      ? 'Favor registrese para continuar.'
      : ''

  const [state, setState] = useState<State>({ message: null, errors: {} })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const result = await createUser(formData)

    if (result.errors) {
      setState({ errors: result.errors, message: result.message || null })
    } else {
      setState({ errors: {}, message: result.message || null })
    }
    setLoading(false)
  }
console.log(state)
console.log(loading)
  return (
    <div className="flex items-center justify-center h-screen mt-[-100px] pt-0">
      <form onSubmit={handleSubmit} className="">
        <div className="flex-1 rounded-lg px-6 pb-4 pt-0">
          <h1 className={`mb-3 text-2xl`}>{message}</h1>
          <div className="w-fit grid gap-2">
            <div className="relative">
              <label className="mb-3 mt-5 block text-m font-medium text-white-800" htmlFor="user">
                Usuario
              </label>
              <div>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-gray-900 placeholder:text-gray-500"
                  id="user"
                  type="email"
                  name="user"
                  placeholder="ingrese su email"
                  required
                />
              </div>
            </div>
            <div className="mt-0">
              <label className="mb-3 mt-5 block text-m font-medium text-white-800" htmlFor="">
                Contraseña
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-gray-900 outline-2 placeholder:text-gray-500"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Introdusca la contraseña"
                  //minLength={6}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              aria-disabled={true}
            >
              {pathname === '/login' ? 'Iniciar sesión' : 'Registrarse'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Loginform
