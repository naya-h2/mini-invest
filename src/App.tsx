import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ListPage from "./pages/list/ListPage";
import MyPage from "./pages/mypage/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
