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
          url: 'https://github.com/schmuvius/schmuvius',
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
      name: 'giesrighejgljer',
      description: '💿 ghejesriggljgheesrigjglj',
      type: ProjectType.Miscellaneous,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/schmuvius/a',
        },
      ],
    },

    {
      name: 'bbbbbbbbbb',
      description:
        '🎉 bbbbbbbbbbbbbbbbbbbbbb',
      type: ProjectType.Bot,
      icon: '/assets/icons/0.svg',

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/',
        },
        {
          label: 'Add to server',
          icon: <PlusIcon />,
          url: 'https://discord.com/',
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
          url: 'https://discord.gg/',
          target: '_blank',
        },
      ],
    },

    {
      name: 'F',
      description:
        '🔎 Library',
      type: ProjectType.Library,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/?',
        },
        {
          label: 'Docs',
          icon: <FileTextIcon />,
          url: 'https://github.com/schmuvius/',
        },
      ],
    },

    {
      name: 'TF',
      description:
        '🥴 wtf',
      type: ProjectType.Website,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/schmuvius/d',
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
          url: 'https://github.com/schmuvius/bepaint',
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

    {
      name: 'Music Pause Remover',
      description: '🎵 Removes the long pauses between music in Minecraft',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MCPEDL',
          icon: <ArchiveIcon />,
          url: 'https://mcpedl.com/music-pause-remover-pack/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: 'https://dl.mcpedl.com/texturepacks/5016/Music-Pause-Remover_1613938168.mcpack',
        },
      ],
    },

    {
      name: 'Achievement Get All',
      description: '🏆 Easily get all the Achievements in Minecraft',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MCPEDL',
          icon: <ArchiveIcon />,
          url: 'https://mcpedl.com/achievement-get-all/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: 'https://dl.mcpedl.com/worlds/10946/Acheivment-Get-All_1610124113.mcworld',
        },
      ],
    },

    {
      name: 'Flucky',
      description: '🎲 Randomly rotates many different block textures',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MCPEDL',
          icon: <ArchiveIcon />,
          url: 'https://mcpedl.com/flucky-pack/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: 'https://dl.mcpedl.com/texturepacks/3715/Fluky_1604452251.mcpack',
        },
      ],
    },

    {
      name: 'KLOW',
      description:
        '👑 Kinda Like Over World turns the nether into the overworld',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MCPEDL',
          icon: <ArchiveIcon />,
          url: 'https://mcpedl.com/klow-pack/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: 'https://dl.mcpedl.com/texturepacks/2678/KLOW_1598303758.mcpack',
        },
      ],
    },

    {
      name: 'Caramel PVP',
      description: '⚔️ A streamlined PVP resource pack for Minecraft',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'MCPEDL',
          icon: <ArchiveIcon />,
          url: 'https://mcpedl.com/pvp-lite/',
          target: '_blank',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: 'https://dl.mcpedl.com/texturepacks/2694/Caramel_1606766519.mcpack',
        },
      ],
    },

    {
      name: 'Procrasti8x8',
      description: '🔆 An 8x8 recreation of the Minecraft Vanilla textures',
      type: ProjectType.ResourcePack,

      links: [
        {
          label: 'GitHub',
          icon: <GitHubLogoIcon />,
          url: 'https://github.com/ProcrastinationNation/Procrasti8x8',
        },
        {
          label: 'Download',
          icon: <DownloadIcon />,
          url: 'https://github.com/ProcrastinationNation/Procrasti8x8/archive/refs/heads/master.zip',
        },
      ],
    },
  ] satisfies Project[]
).sort((a, b) => a.name.localeCompare(b.name));
