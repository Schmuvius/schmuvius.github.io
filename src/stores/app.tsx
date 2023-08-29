import { ChatBubbleIcon, ImageIcon, MobileIcon } from '@radix-ui/react-icons';
import { ComponentChild } from 'preact';
import { create } from 'zustand';

export enum ProjectType {
  ResourcePacks,
  Bots,
  Apps,
}

export const PROJECT_TYPE_NAMES: Record<ProjectType, string> = {
  [ProjectType.ResourcePacks]: 'Resource packs',
  [ProjectType.Bots]: 'Bots',
  [ProjectType.Apps]: 'Apps',
};

export const PROJECT_TYPE_NAMES_SINGULAR: Record<ProjectType, string> = {
  [ProjectType.ResourcePacks]: 'Resource pack',
  [ProjectType.Bots]: 'Bot',
  [ProjectType.Apps]: 'App',
};

export const PROJECT_TYPE_ICONS: Record<ProjectType, ComponentChild> = {
  [ProjectType.ResourcePacks]: <ImageIcon />,
  [ProjectType.Bots]: <ChatBubbleIcon />,
  [ProjectType.Apps]: <MobileIcon />,
};

export interface UseApp {
  projectType?: ProjectType;
}

const defaultApp: UseApp = {
  projectType: undefined,
};

export const useApp = create<UseApp>(() => defaultApp);
