import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-pink-500">

      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default LoadingSpinner

