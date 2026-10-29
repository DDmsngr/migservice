import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CatalogPage from './pages/CatalogPage'
import CategoryPage from './pages/CategoryPage'
import ContactsPage from './pages/ContactsPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter basename="/migservice">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:slug" element={<CategoryPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
