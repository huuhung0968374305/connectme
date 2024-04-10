import { SearchOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

interface SearchProps {
  onInputChange?: (value: string) => void
  placeholder?: string
}

export const Search: React.FC<SearchProps> = ({
  onInputChange,
  placeholder = ''
}) => {
  const [value, setValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (onInputChange) {
      onInputChange(value)
    }
  }, [value])

  return (
    <div className='w-full h-10 rounded-3xl bg-gray-200 focus:bg-blue-200 flex items-center px-4'>
      <span className='text-gray-500'>
        <SearchOutlined />
      </span>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='focus:outline-none bg-inherit ml-4 text-sm text-gray-500'
      />
    </div>
  )
}
