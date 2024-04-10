import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ChapterContent from './pages/Chapter-Content';
import ChapterOfNovel from './pages/Chapter-Of-Novel';
import { Home } from './pages/Home.jsx';
import Login from './pages/Login';
import NovelOfCategory from './pages/Novel-Of-Category';
import Register from './pages/Register';
const App = () => {
  const location = useLocation();
  console.log(location)
  const pathname = location.pathname;

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Trang chủ";
        metaDescription = "Chào mừng bạn đến với trang chủ của chúng tôi. Đây là nơi bạn có thể tìm thấy các tiểu thuyết mới nhất.";
        break;
      case "/list-chapter-of-novel":
        title = "Danh sách chương của tiểu thuyết";
        metaDescription = "Xem danh sách chương của tiểu thuyết tại đây.";
        break;
      case "/chapter-content":
        title = "Nội dung chương";
        metaDescription = "Đọc nội dung của mỗi chương trong tiểu thuyết.";
        break;
      case "/login":
        title = "Đăng nhập";
        metaDescription = "Đăng nhập vào hệ thống để tiếp tục.";
        break;
      case "/logout":
        title = "Đăng xuất";
        metaDescription = "Đăng xuất khỏi hệ thống.";
        break;
      default:
        title = "Trang không tồn tại";
        metaDescription = "Trang không tồn tại hoặc đã bị lỗi.";
        break;
    }

    document.title = title;
    const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    } else {
      // Tạo thẻ meta description nếu chưa tồn tại
      const newMetaDescriptionTag = document.createElement('meta');
      newMetaDescriptionTag.name = "description";
      newMetaDescriptionTag.content = metaDescription;
      document.head.appendChild(newMetaDescriptionTag);
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-chapter-of-novel" element={<ChapterOfNovel />} />
      <Route path="/chapter-content" element={<ChapterContent />} />
      <Route path="/novel-of-category" element={<NovelOfCategory />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Register />} />
    </Routes>
  );
}

export default App;
