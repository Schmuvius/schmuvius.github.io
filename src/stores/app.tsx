import { ChatBubbleIcon, ImageIcon, MobileIcon } from '@radix-ui/react-icons';
import { ComponentChild } from 'preact';
import { create } from 'zustand';

export enum ProjectType {
  ResourcePack,
  Bot,
  App,
}

export const PROJECT_TYPE_NAMES: Record<ProjectType, string> = {
  [ProjectType.ResourcePack]: 'Resource pack',
  [ProjectType.Bot]: 'Bot',
  [ProjectType.App]: 'App',
};
export const PROJECT_TYPE_NAMES_PLURAL: Record<ProjectType, string> = {
  [ProjectType.ResourcePack]: 'Resource packs',
  [ProjectType.Bot]: 'Bots',
  [ProjectType.App]: 'Apps',
};
export const PROJECT_TYPE_ICONS: Record<ProjectType, ComponentChild> = {
  [ProjectType.ResourcePack]: <ImageIcon />,
  [ProjectType.Bot]: <ChatBubbleIcon />,
  [ProjectType.App]: <MobileIcon />,
};

export interface UseApp {
  projectType?: ProjectType;
}

const defaultApp: UseApp = {
  projectType: undefined,
};

export const useApp = create<UseApp>(() => defaultApp);
