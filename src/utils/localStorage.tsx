export const getLocalStorageItem = <T,>(key: string): T | null => {
  const data = localStorage.getItem(key)
  if (!data) return null
  try {
    return JSON.parse(data) as T
  } catch (error) {
    console.error('Error parsing local storage data:', error)
    return null
  }
}

export const setLocalStorageItem = <T,>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeLocalStorageItem = (key: string): void => {
  localStorage.removeItem(key)
}
