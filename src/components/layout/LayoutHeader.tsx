import { FC } from 'react';

import Link from 'next/link';

const LayoutHeader: FC = () => {
  return (
    <header className="flex items-center bg-white text-sm shadow-sm">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-semibold">
          <a className="font-bold">Where in the world?</a>
        </Link>
      </div>
    </header>
  );
};

export default LayoutHeader;
