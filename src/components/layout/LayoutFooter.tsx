import { FC } from 'react';

const LayoutFooter: FC = () => {
  return (
    <footer className="attribution self-center text-center text-xs">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
        target="_blank"
        className="text-blue-800"
        rel="noreferrer"
      >
        Frontend Mentor | REST Countries API with color theme switcher
      </a>
      . Coded by
      <a
        href="https://github.com/boonyarit-iamsaard"
        target="_blank"
        className="text-blue-800"
        rel="noreferrer"
      >
        Boonyarit Iamsa-ard
      </a>
      .
    </footer>
  );
};

export default LayoutFooter;
