import 'App.css';
import { StrictMode } from 'preact/compat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from 'routes/Error404';
import Home from 'routes/Home';
import Layout from 'routes/Layout';
import Projects from 'routes/Projects';

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
