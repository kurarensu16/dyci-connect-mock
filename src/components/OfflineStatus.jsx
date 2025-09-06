import { useEffect, useState } from 'react'

const OfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (isOnline) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-yellow-100 border border-yellow-400 rounded-lg px-4 py-2 shadow-lg">
      <div className="flex items-center space-x-2">
        <span className="text-yellow-700">⚠️</span>
        <span className="text-yellow-700 text-sm">
          You are currently offline. Some features may be limited.
        </span>
      </div>
    </div>
  )
}

export default OfflineStatus