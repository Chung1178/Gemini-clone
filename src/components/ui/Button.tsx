import React from 'react'

// 步驟 1: 定義元件的 props 藍圖 (type ButtonProps)
type ButtonProps = {
  children: React.ReactNode // 讓按鈕可以包含文字或圖示等任何內容
  onClick: () => void // 一個點擊後要執行的函式
  variant?: 'primary' | 'secondary' // 按鈕的樣式，'?' 代表這是可選的
  disabled?: boolean // 是否禁用，'?' 代表這是可選的
}

// 步驟 2: 讓 Button 元件遵循這個藍圖，並設定預設值
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary', // 如果不傳 variant，預設就是 'primary'
  disabled = false, // 如果不傳 disabled，預設就是 false
}) => {
  // 之後我們可以根據 variant 來決定 className，今天先簡化
  const className = variant === 'secondary' ? 'btn-primary' : 'btn-secondary'

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
