import type React from 'react'

type AuthLayoutProps = {
  title: string
  children: React.ReactNode
}

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div>
          <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            {title} {/* <== 這裡使用動態 title */}
          </h1>
        </div>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
