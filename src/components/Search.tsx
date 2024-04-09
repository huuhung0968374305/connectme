import { SearchOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

interface SearchProps {
  onEnter?: (value: string) => void
  placeholder?: string
}

export const Search: React.FC<SearchProps> = ({
  onEnter,
  placeholder = ''
}) => {
  const [value, setValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onEnter) {
      onEnter(value)
      setValue('') // Optional: Clear input after Enter
    }
  }

  return (
    <div className='w-full h-10 rounded-3xl bg-gray-200 focus:bg-blue-200 flex items-center px-4'>
      <span className='text-gray-500'>
        <SearchOutlined />
      </span>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className='focus:outline-none bg-inherit ml-4 text-sm text-gray-500'
      />
    </div>
  )
}
