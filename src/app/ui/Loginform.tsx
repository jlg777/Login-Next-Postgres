import { usePathname } from "next/navigation"

const register="Favor Registrese para continuar."
const login="Favor ingrese para continuar."

const Loginform = () => {
  const pathname = usePathname()

  const message = pathname === '/login'
    ? 'Favor ingrese para continuar.'
    : pathname === '/register'
    ? 'Favor registrese para continuar.'
    : 'Por favor ingrese';

  return (
    <div className="flex items-center justify-center h-screen mt-[-100px] pt-0">
        <form action="" className="">
          <div className="flex-1 rounded-lg px-6 pb-4 pt-0">
            <h1 className={`mb-3 text-2xl`}>{message}</h1>
            <div className="w-fit grid gap-2">
              <div className="relative">
                <label
                  className="mb-3 mt-5 block text-m font-medium text-white-800"
                  htmlFor="user"
                >
                  Usuario
                </label>
                <div>
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
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
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Introdusca la contraseña"
                    minLength={6}
                    required
                  />
                </div>
              </div>
              <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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