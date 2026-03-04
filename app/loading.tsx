export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading Town of Willowbrook...</p>
      </div>
    </div>
  )
}