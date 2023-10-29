import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router';
import NotFound from '@pages/NotFound';

function App() {
  return (
    <div className="sm:px-2 md:px-4 mx-auto max-w-[90%]">
      <Routes>
        {privateRoutes.map((route, index) => {
          const Element = route.component;
          return <Route key={index} path={route.path} element={<Element />} />;
        })}
        {publicRoutes.map((route, index) => {
          const Element = route.component;
          return <Route key={index} path={route.path} element={<Element />} />;
        })}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
