import React from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type InputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  className?: string
  autoComplete?: 'on' | 'off' | 'new-password' | 'current-password' | 'email'
  label?: string // 輸入框的標籤文字，可選
  error?: boolean // 是否處於錯誤狀態，可選
}

const Input = ({
  error = false,
  type = 'text',
  label,
  className,
  ...rest
}: InputProps) => {
  const baseStyles =
    'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
  const errorStyles =
    'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
  const normalStyles = 'text-gray-900 ring-gray-300 focus:ring-blue-600'

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
      )}
      <input
        type={type}
        className={twMerge(
          clsx(baseStyles, error ? errorStyles : normalStyles, className)
        )}
        {...rest}
      />
    </div>
  )
}

export default Input
