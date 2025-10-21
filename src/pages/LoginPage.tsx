import { useEffect, useState } from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  // const [visitCount, setVisitCount] = useState(0)
  const [loginStatus, setLoginStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  useEffect(() => {
    if (loginStatus === 'success') {
      alert('登入成功，歡迎回來！')
      setError(null)
    }
    if (loginStatus === 'error') {
      setError('信箱或密碼錯誤！')
      setLoginStatus('idle')
    }
  }, [loginStatus])

  // const features = ['超強動力', '自動導航', '可樂補充', 'SUPER AI 核心']

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (password.length < 6) {
      setError('密碼長度不能少於 6 個字元！')
      return
    }

    if (!email) {
      setError('請輸入電子信箱！')
      return
    }

    setLoginStatus('loading')

    setTimeout(() => {
      if (email === 'test@test.com' && password === '123456789') {
        setLoginStatus('success')
      } else {
        setLoginStatus('error')
      }
    }, 1500)

    // setError('')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div>
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            歡迎來到 Gemini Clone
          </h1>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          {/* 我們把 state (email) 和 setState (setEmail) 交給 Input 元件控制 */}
          <Input
            label="電子信箱"
            type="email"
            placeholder="請輸入信箱"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError(null)
            }}
            autoComplete="email"
            error={!!error}
          />
          {/* 我們把 state (password) 和 setState (setPassword) 交給另一個 Input 元件控制 */}
          <Input
            label="密碼"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(null)
            }}
            autoComplete="current-password"
            error={!!error}
          />
          <Button
            className="w-full"
            disabled={loginStatus === 'loading'}
            type="submit"
          >
            登入
          </Button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>

        {/* <div style={{ marginTop: '2rem' }}>
          <h2>本戰艦搭載功能：</h2>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default LoginPage
