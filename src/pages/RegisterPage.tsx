import React, { useEffect, useState } from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import AuthLayout from '../components/layout/AuthLayout'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [registerStatus, setRegisterStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  useEffect(() => {
    if (registerStatus === 'success') {
      alert('註冊成功！')
      setError(null)
    }
    if (registerStatus === 'error') {
      alert('註冊失敗')
      setRegisterStatus('idle')
    }
  }, [registerStatus])

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!email || !password || !confirmPassword) {
      setError('欄位不得為空')
      return
    }
    if (password.length < 6) {
      setError('密碼長度不能少於 6 個字元！')
      return
    }
    if (password !== confirmPassword) {
      setError('密碼與確認密碼不符')
      return
    }
    setRegisterStatus('loading')

    setTimeout(() => {
      setRegisterStatus('success')
    }, 1500)
  }

  return (
    <AuthLayout title="建立您的帳號">
      <form className="space-y-6" onSubmit={handleRegister}>
        <Input
          id="email"
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
        <Input
          id="password"
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
        <Input
          id="confirmPassword"
          label="確認密碼"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value)
            setError(null)
          }}
          autoComplete="current-password"
          error={!!error}
        />
        <Button
          className="w-full"
          disabled={registerStatus === 'loading'}
          type="submit"
        >
          註冊
        </Button>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
