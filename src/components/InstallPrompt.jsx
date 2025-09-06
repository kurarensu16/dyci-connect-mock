import { usePWA } from '../hooks/usePWA'

const InstallPrompt = () => {
  const { isInstallable, installApp, isStandalone } = usePWA()

  if (!isInstallable || isStandalone) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-6 h-6 text-primary-600">
          📱
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">
            Install DYCI Connect
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Get the full app experience! Add to your home screen for quick access.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={installApp}
              className="btn btn-primary text-sm px-4 py-2"
            >
              Install App
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="btn btn-secondary text-sm px-4 py-2"
            >
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallPrompt