'use client';

import Image from 'next/image';
import Link from 'next/link';

const MIN_INDEX = 1;
const MAX_INDEX = 4;

const NotFoundPage = () => {
  const generateRandomNotfoundId = () =>
    Math.floor(MIN_INDEX + Math.random() * (MAX_INDEX - MIN_INDEX + 1));

  return (
    <div className="flex size-full h-[100vh] flex-col items-center justify-center gap-y-4">
      <Image
        alt="Not Found"
        height={500}
        objectFit="contain"
        objectPosition="center center"
        src={`/assets/not-found/not-found-${generateRandomNotfoundId()}.gif`}
        width={700}
      />
      <button>
        <Link href="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
