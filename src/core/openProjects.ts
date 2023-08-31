export default function openProjects(open = true) {
  location.hash = open ? '#projects' : '#';
}
