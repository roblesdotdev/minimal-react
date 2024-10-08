import { Link } from 'react-router'

export function loader() {
  throw new Response('Not found', { status: 404 })
}

export default function Route() {
  return <h1>This not be shown</h1>
}

export function ErrorBoundary() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-4xl">Not found page</h1>
        <Link to="/" className="inline-flex items-center justify-center gap-1">
          <span className="pb-1 text-lg">&larr;</span> Back to home
        </Link>
      </div>
    </div>
  )
}
