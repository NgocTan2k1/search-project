import Home from '@/pages/Home';
import DetailDocument from '@/pages/DetailDocument';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';

//
const publicRoutes = [
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
];

const privateRoutes = [
  { path: '/', component: Home },
  { path: '/detail-document', component: DetailDocument },
];

export { privateRoutes, publicRoutes };
