import { ComponentChild } from 'preact';
import { ProjectType } from 'stores/app';

export interface Project {
  name: string;
  description: string;
  type: ProjectType;
  icon?: string;
  actions?: ProjectAction[];
}

export interface ProjectAction {
  label: string;
  url: string;
  icon: ComponentChild;
}

export const projects: Project[] = (
  [
    {
      name: 'Stellar',
      description: '🚀 Professional blueprint editor for Spaceflight Simulator',
      type: ProjectType.App,
    },
  ] satisfies Project[]
).sort((a, b) => a.name.localeCompare(b.name));
