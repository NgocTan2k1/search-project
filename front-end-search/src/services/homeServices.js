import { http } from '@/axios/index';

const getDocument = async (pageNumber) => {
  return await http.get(`/page/${pageNumber}`);
};

export { getDocument };
