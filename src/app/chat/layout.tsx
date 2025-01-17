import { PropsWithChildren } from 'react';

import ResponsiveLayout from '@/components/ResponsiveLayout';
import { isMobileDevice } from '@/utils/responsive';

import Desktop from './(desktop)/layout';
import Mobile from './(mobile)/layout';

const Layout = ({ children }: PropsWithChildren) => (
  <ResponsiveLayout Desktop={Desktop} Mobile={Mobile} isMobile={isMobileDevice}>
    {children}
  </ResponsiveLayout>
);

export default Layout;
