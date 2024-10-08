import { Links, Meta, Outlet, Scripts, type MetaFunction } from 'react-router'
import '~/styles/global.css'

export const meta: MetaFunction = () => [
  { title: 'React Starter' },
  { name: 'description', content: 'Welcome to my personal react starter.' },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
