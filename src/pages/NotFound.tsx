import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-x py-28 text-center">
      <p className="font-mono text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold">Такой страницы нет</h1>
      <Link to="/catalog" className="btn btn-primary mt-8">
        В каталог
      </Link>
    </div>
  )
}
