import { create } from 'zustand';

const storeLocal = create((set) => ({
  userInfo: {},
  setUserInfo: (datas) => set(() => ({ userInfo: { ...datas } })),

  documents: [],
  setDocuments: (datas) => set(() => ({ documents: [...datas] })),

  resetStore: () =>
    set(() => ({
      userInfo: {},
      documents: [],
    })),
}));

export { storeLocal };
