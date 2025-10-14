import { useState } from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('--- 登入資訊 ---')
    console.log('Email:', email)
    console.log('Password:', password)
    alert(`準備用 Email: ${email} 登入！`)
  }

  return (
    <div>
      <h1>歡迎來到 Gemini Clone</h1>
      <form>
        {/* 我們把 state (email) 和 setState (setEmail) 交給 Input 元件控制 */}
        <Input
          type="email"
          placeholder="請輸入信箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* 我們把 state (password) 和 setState (setPassword) 交給另一個 Input 元件控制 */}
        <Input
          type="password"
          placeholder="請輸入密碼"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>登入</Button>
      </form>
    </div>
  )
}

export default LoginPage
