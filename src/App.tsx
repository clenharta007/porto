import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        {/* Blog hidden for now — uncomment to re-enable (also the nav link in Header.tsx)
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
