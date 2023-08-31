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

    {
      name: 'Blitzkrieg',
      description:
        '🎉 All-in-one Discord bot for everything World of Tanks Blitz',
      type: ProjectType.Bot,
      icon: '/assets/icons/blitzkrieg.svg',

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/tresabhi/blitzkrieg',
        },
        {
          label: 'Add to server',
          icon: <PlusIcon />,
          url: 'https://discord.com/application-directory/1097673957865443370',
          target: '_blank',
        },
      ],
    },

    {
      name: 'Très Discord',
      description: '🎮 A Discord server all about me and my projects',
      type: ProjectType.Social,
      icon: '/assets/icons/tres-discord.svg',

      links: [
        {
          label: 'Join',
          icon: <PlusIcon />,
          url: 'https://discord.gg/nDt7AjGJQH',
          target: '_blank',
        },
      ],
    },

    {
      name: 'React Fuzzysort',
      description:
        '🔎 The fuzzysort library implemented as a handy React component',
      type: ProjectType.Library,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/tresabhi/react-fuzzysort',
        },
        {
          label: 'Docs',
          icon: <FileTextIcon />,
          url: 'https://github.com/tresabhi/react-fuzzysort?tab=readme-ov-file#documentation',
        },
      ],
    },

    {
      name: 'Trippy Fur',
      description:
        '🥴 A replication of MacOS\' "collective intelligence" screensaver',
      type: ProjectType.Website,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/tresabhi/trippy-fur',
        },
      ],
    },

    {
      name: 'Bepaint',
      description: '🎡 Quickly generate elegant themes with minimal code',
      type: ProjectType.Library,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/tresabhi/bepaint',
        },
        {
          label: 'Docs',
          icon: <FileTextIcon />,
          url: 'https://github.com/tresabhi/bepaint?tab=readme-ov-file#documentation',
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
          url: 'https://github.com/tresabhi/scripts',
        },
      ],
    },

    {
      name: 'Bedrock Launcher',
      description: '⛏️ An unofficial Minecraft Bedrock for Windows launcher',
      type: ProjectType.App,
      icon: '/assets/icons/bedrock-launcher.png',

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/BedrockLauncher/BedrockLauncher',
        },
        {
          label: 'Website',
          icon: <GlobeIcon />,
          url: 'http://bedrocklauncher.github.io/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: 'https://github.com/bedrockLauncher/BedrockLauncher/releases/latest/download/BedrockLauncherSetup.exe',
          target: '_blank',
        },
      ],
    },

    {
      name: 'Corsa',
      description: '🍁 A set of packs to breath new life into Minecraft',
      type: ProjectType.ResourcePack,
      icon: '/assets/icons/corsa.png',

      links: [
        {
          label: 'MCPEDL',
          icon: <ArchiveIcon />,
          url: 'https://mcpedl.com/corsa-pack/',
          target: '_blank',
        },
      ],
    },
  ] satisfies Project[]
).sort((a, b) => a.name.localeCompare(b.name));
