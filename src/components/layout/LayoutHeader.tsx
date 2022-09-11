import { FC } from 'react';

import Link from 'next/link';

const LayoutHeader: FC = () => {
  return (
    <header className="flex items-center">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-bold">
          <a className="font-bold">Where in the world?</a>
        </Link>
      </div>
    </header>
  );
};

export default LayoutHeader;
