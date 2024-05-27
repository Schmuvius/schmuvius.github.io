import {
  ArchiveIcon,
  DownloadIcon,
  FileTextIcon,
  GitHubLogoIcon,
  GlobeIcon,
  PlayIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
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
      name: 'Test',
      description: '🎈 Lorem ipsum dolor sit amet',
      type: ProjectType.App,
      icon: '/assets/icons/stellar.svg',

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/schmuvius/schmuvius.github.io/',
        },
        {
          label: 'Docs',
          icon: <FileTextIcon />,
          url: '/test',
        },
        {
          label: 'Launch',
          icon: <PlayIcon />,
          url: 'https://schmuvius.github.io/',
          target: '_blank',
        },
      ],
    },

    {
      name: 'G',
      description: '💿 ',
      type: ProjectType.Miscellaneous,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: '/',
        },
      ],
    },

    {
      name: 'B',
      description:
        '🎉 ',
      type: ProjectType.Bot,
      icon: '/assets/icons/0.svg',

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: '/',
        },
        {
          label: 'Add to server',
          icon: <PlusIcon />,
          url: '/',
          target: '_blank',
        },
      ],
    },

    {
      name: 'Controller',
      description: '🎮 Controller',
      type: ProjectType.Social,
      icon: '/assets/icons/1.svg',

      links: [
        {
          label: 'Game',
          icon: <PlusIcon />,
          url: '/',
          target: '_blank',
        },
      ],
    },

    {
      name: 'Library',
      description:
        '🔎 Library',
      type: ProjectType.Library,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: '/',
        },
        {
          label: 'Docs',
          icon: <FileTextIcon />,
          url: 'https://github.com/schmuvius/',
        },
      ],
    },

    {
      name: 'My Website',
      description:
        '🥴',
      type: ProjectType.Website,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: '/',
        },
      ],
    },

    {
      name: 'Paint',
      description: '🎨',
      type: ProjectType.Library,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: '/',
        },
        {
          label: 'Docs',
          icon: <FileTextIcon />,
          url: '/documentation',
        },
      ],
    },

    {
      name: 'Scripts',
      description: '🪄 Scripts that I use on my computer',
      type: ProjectType.Miscellaneous,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: '/scripts',
        },
      ],
    },

    {
      name: 'B',
      description: '⛏️ ',
      type: ProjectType.App,
      icon: '/assets/icons/bedrock-launcher.png',

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: '/',
        },
        {
          label: 'Website',
          icon: <GlobeIcon />,
          url: '/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: '/',
        },
      ],
    },

    {
      name: 'C',
      description: '🍁 ',
      type: ProjectType.ResourcePack,
      icon: '/assets/icons/corsa.png',

      links: [
        {
          label: 'MC',
          icon: <ArchiveIcon />,
          url: '/',
          target: '_blank',
        },
      ],
    },

    {
      name: 'Music',
      description: '🎵 ',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MC',
          icon: <ArchiveIcon />,
          url: '/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: '/',
        },
      ],
    },

    {
      name: 'A',
      description: '🏆',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MC',
          icon: <ArchiveIcon />,
          url: '/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: '/',
        },
      ],
    },

    {
      name: 'F',
      description: '🎲 ',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MC',
          icon: <ArchiveIcon />,
          url: '/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: '/',
        },
      ],
    },

    {
      name: 'W',
      description:
        '👑 ',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MC',
          icon: <ArchiveIcon />,
          url: '/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: '/',
        },
      ],
    },

    {
      name: 'C',
      description: '⚔️ ',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MC',
          icon: <ArchiveIcon />,
          url: '/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: '/',
        },
      ],
    },

    {
      name: 'P',
      description: '🔆 ',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: '/',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: '/',
        },
      ],
    },
  ] satisfies Project[]
).sort((a, b) => a.name.localeCompare(b.name));
