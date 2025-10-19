import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

// 步驟 1: 定義元件的 props 藍圖 (type ButtonProps)
type ButtonProps = {
  children: React.ReactNode // 讓按鈕可以包含文字或圖示等任何內容
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void // 一個點擊後要執行的函式
  variant?: 'primary' | 'secondary' | 'destructive' // 按鈕的樣式，'?' 代表這是可選的
  disabled?: boolean // 是否禁用，'?' 代表這是可選的
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

// 步驟 2: 讓 Button 元件遵循這個藍圖，並設定預設值
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className,
}) => {
  // 之後我們可以根據 variant 來決定 className，今天先簡化
  const variants = {
    primary:
      'flex justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
    secondary:
      'flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
    destructive:
      'flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500',
  }

  const finalClassName = twMerge(clsx(variants[variant], className))

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      // 模板字串寫法: className={`${variantClass} ${className || ''}`}
      // clsx 寫法 (更專業，會自動處理 undefined 或空字串):
      className={finalClassName}
    >
      {children}
    </button>
  )
}

export default Button
