import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main container" data-testid="main-block">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
