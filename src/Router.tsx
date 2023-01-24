import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'routes/Home';
import Projects from 'routes/projects/Projects';
import ProjectsLayout from 'routes/projects/ProjectsLayout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="projects/" element={<ProjectsLayout />}>
            <Route index element={<Projects />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
