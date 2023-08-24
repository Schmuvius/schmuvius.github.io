import { create } from 'zustand';

export enum Filter {
  All,
  ResourcePack,
}

export const FILTER_NAMES: Record<Filter, string> = {
  [Filter.All]: 'All',
  [Filter.ResourcePack]: 'Resource packs',
};

export interface UseApp {
  filter: Filter;
}

const defaultApp: UseApp = {
  filter: Filter.All,
};

export const useApp = create<UseApp>(() => defaultApp);
