import { redirect } from 'next/navigation'
import { createUser, State } from '../lib/actions'
import { useEffect, useState } from 'react'

const Loginform = () => {
  const [state, setState] = useState<State>({ message: null, errors: {} })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const result = await createUser(formData)
    if (result.errors || result.message){}
    setState({ errors: result.errors || {}, message: result.message  })
    setLoading(false)}
    
  

  useEffect(() => {
    if (state.message === 'User created successfully') {
      redirect('/success?message=User created successfully')
    }
  }, [state.message])
  //console.log(state)
  //console.log(loading)
  return (
    <div className="flex items-center justify-center h-screen mt-[-100px] pt-0">
      <form onSubmit={handleSubmit} className="">
        <div className="flex-1 rounded-lg px-6 pb-4 pt-0">
          <h1 className={`mb-3 text-2xl`}>Favor registrese para continuar</h1>
          <div className="w-fit grid gap-2">
            <div className="relative">
              <label className="mb-3 mt-5 block text-m font-medium text-white-800" htmlFor="email">
                Usuario
              </label>
              <div>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-gray-900 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="ingrese su email"
                  required
                />
                {state && <p className="text-red-500">{state.errors?.email}</p>}

              </div>
            </div>
            <div className="mt-0">
              <label className="mb-3 mt-5 block text-m font-medium text-white-800" htmlFor="password">
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
                {state && <p className="text-red-500">{state.errors?.password}</p>}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"

            >
              {loading ? 'Registrando...' : 'Registrarse'}
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Loginform
