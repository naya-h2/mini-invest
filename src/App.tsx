import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ListPage from "./pages/list/ListPage";
import MyPage from "./pages/mypage/MyPage";
import SearchPage from "./pages/search/SearchPage";
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
