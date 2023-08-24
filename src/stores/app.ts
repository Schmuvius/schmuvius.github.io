import { create } from 'zustand';

export enum Filter {
  All,
  ResourcePacks,
  Bots,
  Apps,
}

export const FILTER_NAMES: Record<Filter, string> = {
  [Filter.All]: 'All',
  [Filter.ResourcePacks]: 'Resource packs',
  [Filter.Bots]: 'Bots',
  [Filter.Apps]: 'Apps',
};

export interface UseApp {
  filter: Filter;
}

const defaultApp: UseApp = {
  filter: Filter.All,
};

export const useApp = create<UseApp>(() => defaultApp);
