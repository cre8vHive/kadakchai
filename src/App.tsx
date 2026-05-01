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
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        <Route index element={<HomePage />} />
        <Route path="kadakchai/collections/:slug" element={<CollectionPage />} />
        <Route path="kadakchai/products/:slug" element={<ProductPage />} />
        <Route path="kadakchai/pages/:slug" element={<ContentPage />} />
        <Route path="kadakchai/search" element={<SearchPage />} />
        <Route path="kadakchai/cart" element={<CartPage />} />
        <Route path="kadakchai/account/login" element={<AccountPage mode="login" />} />
        <Route path="kadakchai/account/register" element={<AccountPage mode="register" />} />
        <Route path="kadakchai/account/orders" element={<AccountPage mode="orders" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
