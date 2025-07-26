import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.jsx";
import CarPage from "../pages/CarPage/CarPage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CarPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
