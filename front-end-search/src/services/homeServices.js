import { http } from '@/axios/index';

const getDocument = async () => {
  const res = await http.get('/page/0');
  return res;
};

export { getDocument };
