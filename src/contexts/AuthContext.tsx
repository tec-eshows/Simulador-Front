import { createContext, useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
import { authClient } from '../services/authClient'
import { loginService } from '../services/login'

export type User = {
  auth_ticket: string
  user_id: number | string
  full_name: string
  email: string
}

type SignInCredentials = {
  username: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  user: User
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function signOut() {
  destroyCookie(undefined, 'LOGIN_COOKIE_APP_TOKEN')
  destroyCookie(undefined, 'USER_FULL_NAME')
  destroyCookie(undefined, 'USER_ID_COOKIE_DATA_SESSION')
  destroyCookie(undefined, 'ID_COOKIE_DATA_SESSION')
  destroyCookie(undefined, 'USER_EMAIL')
}
export const getUser = (ctx) => {
  const cookies = parseCookies(ctx)
  const token = cookies.LOGIN_COOKIE_APP_TOKEN
  const userId = cookies.USER_ID_COOKIE_DATA_SESSION
  const id = cookies.USER_EMAIL
  return {
    async userId() {
      return userId || null
    },
  }
}
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User)
  const router = useRouter()

  useEffect(() => {
    const cookies = parseCookies()
    setUser({
      auth_ticket: cookies.LOGIN_COOKIE_APP_TOKEN,
      full_name: cookies.USER_FULL_NAME,
      user_id: cookies.USER_ID_COOKIE_DATA_SESSION,
      email: cookies.USER_EMAIL,
    })
  }, [])

  async function signIn({ username, password }: SignInCredentials) {
    const response = await loginService.login(username, password)

    if (response.data) {
      const { auth_ticket, session, full_name, user_id } = response.data

      const DAY_IN_SECONDS = 86400

      setCookie(null, 'LOGIN_COOKIE_APP_TOKEN', auth_ticket, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      })

      setCookie(null, 'USER_ID_COOKIE_DATA_SESSION', session.user_id, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      })

      setCookie(null, 'USER_FULL_NAME', full_name, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      })
      setCookie(null, 'USER_EMAIL', session.username, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      })

      setCookie(null, 'ID_COOKIE_DATA_SESSION', session.id, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      })

      setUser({
        auth_ticket,
        user_id,
        full_name,
        email: session.username,
      })
    }

    return response
  }
  function signOut() {
    destroyCookie(undefined, 'LOGIN_COOKIE_APP_TOKEN')
    destroyCookie(undefined, 'USER_FULL_NAME')
    destroyCookie(undefined, 'USER_ID_COOKIE_DATA_SESSION')
    destroyCookie(undefined, 'ID_COOKIE_DATA_SESSION')
    destroyCookie(undefined, 'USER_EMAIL')

    Router.push('https://perfil.eshows.com.br/login/logout')
  }
  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
