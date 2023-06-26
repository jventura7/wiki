'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Search({ params }: { params: { query: string } }) {
  const [pages, setPages] = useState<string[]>([]);
  const { push } = useRouter();

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const search = params.query;
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/search?` +
            new URLSearchParams({
              query: search,
            })
        );
        const data = await response.json();
        console.log(data);
        if (data['entries'].length > 0) {
          setPages(data['entries']);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPages();
  });

  return (
    <div>
      {pages.length > 0 ? (
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
      ) : (
        <h1>No pages found</h1>
      )}
    </div>
  );
}
