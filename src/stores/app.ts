import { createStore } from 'zustand';

export enum Filter {
  All,
  ResourcePack,
}

export interface UseApp {
  filter: Filter;
}

const defaultApp: UseApp = {
  filter: Filter.All,
};

export const useApp = createStore<UseApp>(() => defaultApp);
