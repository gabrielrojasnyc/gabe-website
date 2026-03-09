"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h2 className="mb-4 text-2xl font-bold">Something went wrong</h2>
      <p className="mb-8 text-gray-400">{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
      >
        Try again
      </button>
    </div>
  )
}
