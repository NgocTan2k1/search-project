import Home from '@/pages/Home';
import DetailDocument from '@/pages/DetailDocument';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';

//
const publicRoutes = [
  { path: '/', component: SignIn },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
];

const privateRoutes = [
  { path: '/home', component: Home },
  { path: '/detail-document/:id', component: DetailDocument },
];

export { privateRoutes, publicRoutes };
