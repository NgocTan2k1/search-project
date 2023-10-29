import { create } from 'zustand';

const storeLocal = create((set) => ({
  userInfo: {},
  setUserInfo: () => set((datas) => ({ userInfo: { ...datas } })),
  documents: [],
  setDocuments: () => set((datas) => ({ documents: [...datas] })),

  resetStore: () =>
    set(() => ({
      userInfo: {},
      documents: [],
    })),
}));

export { storeLocal };
