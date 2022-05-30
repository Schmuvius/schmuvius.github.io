import create from 'zustand';

interface UseApp {
  time: 'day' | 'night';
}

const UseAppDefaultData: UseApp = {
  time: 'day',
};

const useApp = create<UseApp>(() => UseAppDefaultData);
export default useApp;
