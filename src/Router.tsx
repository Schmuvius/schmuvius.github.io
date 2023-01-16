import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'routes/Home';
import ProjectsLayout from 'routes/projects/ProjectsLayout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="projects" element={<ProjectsLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
