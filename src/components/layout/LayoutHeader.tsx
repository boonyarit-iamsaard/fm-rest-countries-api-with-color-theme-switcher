import { FC } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const LayoutHeader: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <header className="flex items-center bg-white text-sm shadow-sm dark:bg-theme-blue-700">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          <a className="font-bold">Where in the world?</a>
        </Link>
        <div>
          {currentTheme === 'dark' ? (
            <MoonIcon
              role="button"
              className="h-6 w-6 text-white"
              onClick={() => setTheme('light')}
            />
          ) : (
            <SunIcon
              role="button"
              className="h-6 w-6 text-theme-blue-900"
              onClick={() => setTheme('dark')}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
