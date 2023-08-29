import {
  ChatBubbleIcon,
  ImageIcon,
  MixIcon,
  MobileIcon,
} from '@radix-ui/react-icons';
import { ComponentChild } from 'preact';
import { create } from 'zustand';

export enum ProjectType {
  ResourcePack,
  Bot,
  App,
  Miscellaneous,
}

export const PROJECT_TYPE_NAMES: Record<ProjectType, string> = {
  [ProjectType.ResourcePack]: 'Resource pack',
  [ProjectType.Bot]: 'Bot',
  [ProjectType.App]: 'App',
  [ProjectType.Miscellaneous]: 'Miscellaneous',
};
export const PROJECT_TYPE_NAMES_PLURAL: Record<ProjectType, string> = {
  [ProjectType.ResourcePack]: 'Resource packs',
  [ProjectType.Bot]: 'Bots',
  [ProjectType.App]: 'Apps',
  [ProjectType.Miscellaneous]: 'Miscellaneous',
};
export const PROJECT_TYPE_ICONS: Record<ProjectType, ComponentChild> = {
  [ProjectType.ResourcePack]: <ImageIcon />,
  [ProjectType.Bot]: <ChatBubbleIcon />,
  [ProjectType.App]: <MobileIcon />,
  [ProjectType.Miscellaneous]: <MixIcon />,
};

export interface UseApp {
  projectType?: ProjectType;
}

const defaultApp: UseApp = {
  projectType: undefined,
};

export const useApp = create<UseApp>(() => defaultApp);
