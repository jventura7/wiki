'use client';
import usePages from '@/hooks/usePages';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const { pages } = usePages();
  const { push } = useRouter();

  return (
    <>
      <div className="md:w-full md:max-w-6xl">
        <h1 className="text-center text-xl font-medium">All Pages</h1>
        <ul className="grid w-full grid-cols-3 gap-10 p-20 md:grid-cols-6 lg:grid-cols-8">
          {pages.map((page, index) => (
            <div className="group" key={index}>
              <Link
                href={`/wiki/${page}`}
                className="inline-block text-xl transition duration-300 hover:-translate-y-1 hover:text-orange-400"
              >
                {page}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
