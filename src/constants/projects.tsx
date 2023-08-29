import { FileTextIcon, GitHubLogoIcon, PlayIcon } from '@radix-ui/react-icons';
import { ComponentChild } from 'preact';
import { ProjectType } from 'stores/app';

export interface Project {
  name: string;
  description: string;
  type: ProjectType;
  icon?: string;
  links?: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  url: string;
  icon: ComponentChild;
  target?: '_blank';
}

export const projects: Project[] = (
  [
    {
      name: 'Stellar',
      description: '🚀 Professional blueprint editor for Spaceflight Simulator',
      type: ProjectType.App,
      icon: '/assets/icons/stellar.svg',

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/tresabhi/stellar',
        },
        {
          label: 'Docs',
          icon: <FileTextIcon />,
          url: '/stellar',
        },
        {
          label: 'Launch',
          icon: <PlayIcon />,
          url: 'https://stellaralpha.web.app/',
          target: '_blank',
        },
      ],
    },

    {
      name: 'Iowa State University AER E 160',
      description: '🥸 Assignments and projects in this class as a mono repo',
      type: ProjectType.Miscellaneous,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/tresabhi/isu-aer-e-160',
        },
      ],
    },
  ] satisfies Project[]
).sort((a, b) => a.name.localeCompare(b.name));
