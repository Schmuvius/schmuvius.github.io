import { GitHubLogoIcon } from '@radix-ui/react-icons';
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

export const projects: Project[] = [
  {
    name: 'Project 1',
    description: 'Project 1 description',
    type: ProjectType.Apps,
    icon: 'https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/logo.svg',
  },
  {
    name: 'Project 2',
    description: 'Project 2 description',
    type: ProjectType.Bots,
    icon: 'https://elfsight.com/wp-content/themes/elfsight/frontend/assets/img/logo.svg',
    actions: [
      {
        label: 'Github',
        url: 'https://github.com/tresabhi/tresabhi.github.io',
        icon: <GitHubLogoIcon />,
      },
      {
        label: 'Github',
        url: 'https://github.com/tresabhi/tresabhi.github.io',
        icon: <GitHubLogoIcon />,
      },
    ],
  },
  {
    name: 'Project 3',
    description: 'Project 3 description',
    type: ProjectType.ResourcePacks,
    actions: [
      {
        label: 'Github',
        url: 'https://github.com/tresabhi/tresabhi.github.io',
        icon: <GitHubLogoIcon />,
      },
      {
        label: 'Github',
        url: 'https://github.com/tresabhi/tresabhi.github.io',
        icon: <GitHubLogoIcon />,
      },
    ],
  },
  {
    name: 'Project 3',
    description: 'Project 3 description',
    type: ProjectType.ResourcePacks,
  },
];
