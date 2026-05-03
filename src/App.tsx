import { Route, Routes } from "react-router-dom";
import StoreLayout from "./components/StoreLayout";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import CollectionPage from "./pages/CollectionPage";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";

export default function App() {
  const a = 0;
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/collections/:slug" element={<CollectionPage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/pages/:slug" element={<ContentPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account/login" element={<AccountPage mode="login" />} />
        <Route path="/account/register" element={<AccountPage mode="register" />} />
        <Route path="/account/orders" element={<AccountPage mode="orders" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
