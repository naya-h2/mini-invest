import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ListPage from "./pages/list/ListPage";
import MyPage from "./pages/mypage/MyPage";
import SearchPage from "./pages/search/SearchPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import InvestPage from "./pages/invest/InvestPage";
import TokenPage from "./pages/token/TokenPage";
import OrderPage from "./pages/order/OrderPage";
import PlantPage from "./pages/plant/PlantPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/plant" element={<PlantPage />} />
      <Route path="/invest/:id" element={<InvestPage />} />
      <Route path="/order/:id" element={<OrderPage />} />
      <Route path="/token/:id" element={<TokenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
