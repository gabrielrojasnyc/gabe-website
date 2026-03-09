"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Something went wrong</h2>
          <button
            onClick={() => reset()}
            style={{
              padding: "0.5rem 1rem",
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
