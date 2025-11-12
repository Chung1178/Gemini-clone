import Button from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'

const HomePage = () => {
  const { user, logout } = useAuth()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          歡迎來到 Gemini Clone！
        </h1>

        {/* 4. 顯示登入者是誰 */}
        <p className="text-center text-gray-700">
          你好， {user ? user.email : '訪客'}！
        </p>

        {/* 5. 建立一個登出按鈕 */}
        <Button onClick={logout} variant="secondary" className="w-full">
          登出
        </Button>
      </div>
    </div>
  )
}

export default HomePage
