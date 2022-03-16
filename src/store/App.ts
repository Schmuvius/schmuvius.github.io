import create from 'zustand';

interface AppStoreType {
  time: 'day' | 'night';
}

const AppStoreData: AppStoreType = {
  time: 'day',
};

const AppStore = create<AppStoreType>(() => AppStoreData);
export default AppStore;
