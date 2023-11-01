import Home from '@/pages/Home';
import DetailDocument from '@/pages/DetailDocument';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import SignInTest from '@/pages/SignInTest';

//
const publicRoutes = [
  { path: '/', component: SignInTest },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
];

const privateRoutes = [
  { path: '/home', component: Home },
  { path: '/detail-document', component: DetailDocument },
];

export { privateRoutes, publicRoutes };
