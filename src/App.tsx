import { Navigate, Route, Routes } from "react-router-dom";
import StoreLayout from "./components/StoreLayout";
import CartPage from "./pages/CartPage";
import CollectionPage from "./pages/CollectionPage";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import TermsPage from "./pages/TermsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/collections" element={<Navigate to="/collections/all" replace />} />
        <Route path="/collections/:slug" element={<CollectionPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/pages/terms-conditions" element={<Navigate to="/terms-and-conditions" replace />} />
        <Route path="/pages/:slug" element={<ContentPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
