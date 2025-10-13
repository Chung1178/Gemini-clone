import React from 'react'

type InputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: 'text' | 'email' | 'password'
}

const Input = ({ value, onChange, placeholder, type = 'text' }: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default Input
