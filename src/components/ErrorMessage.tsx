interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md"
      role="alert"
      data-testid="error-message"
    >
      <p>{message}</p>
    </div>
  )
}
