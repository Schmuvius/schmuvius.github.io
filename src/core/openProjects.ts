import { useApp } from 'stores/app';

export default function openProjects(open = true) {
  useApp.setState({ showProjects: open });
  location.hash = open ? '#projects' : '#';
}
