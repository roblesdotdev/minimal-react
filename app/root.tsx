import {
  Links,
  Meta,
  Outlet,
  Scripts,
  type LinksFunction,
  type MetaFunction,
} from 'react-router'
import '~/styles/global.css'
import iconAssetUrl from '~/assets/favicon.svg'

export const meta: MetaFunction = () => [
  { title: 'React Starter' },
  { name: 'description', content: 'Welcome to my personal react starter.' },
]

export const links: LinksFunction = () => [
  { rel: 'icon', type: 'image+svg', href: iconAssetUrl },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <Meta />
        <Links />
      </head>
      <body className="bg-canvas text-fg">
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
