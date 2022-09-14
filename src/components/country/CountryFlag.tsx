import Image from 'next/image';
import { FC, useState } from 'react';

interface CountryFlagProps {
  src: string;
  alt: string;
  priority?: boolean;
  rounded?: boolean;
}

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

const CountryFlag: FC<CountryFlagProps> = ({
  src,
  alt,
  priority = false,
  rounded = false,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div
      className={cn(
        'aspect-w-3 aspect-h-2 relative w-full overflow-hidden',
        rounded ? 'rounded-t-lg' : ''
      )}
    >
      {/* TODO: improve image blurred placeholder */}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority={priority}
        className={cn(
          'duration-700 ease-in-out group-hover:opacity-75',
          isImageLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setIsImageLoading(false)}
      />
    </div>
  );
};

export default CountryFlag;
