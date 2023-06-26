'use client';

import usePages from '@/hooks/usePages';
import SearchBar from './SearchBar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const { push } = useRouter();
  const { pages } = usePages();

  const handleRandom = () => {
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    push(`/wiki/${randomPage}`);
  };

  return (
    <div className="relative flex w-full flex-col items-center space-y-6 p-10 font-bold md:flex-row md:items-end md:justify-between md:space-y-0">
      <div className="flex items-end space-x-10">
        <Link className="text-6xl" href="/">
          wiki.
        </Link>
        <Link className="font-medium" href="/create">
          Create Page
        </Link>
        <button onClick={handleRandom} className="font-medium">
          Random Page
        </button>
      </div>
      <SearchBar />
    </div>
  );
}
