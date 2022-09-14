import { FC, Fragment, ReactNode } from 'react';

import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <LayoutHeader />

      <main className="container mx-auto space-y-4 p-4">{children}</main>

      <LayoutFooter />
    </Fragment>
  );
};

export default Layout;
