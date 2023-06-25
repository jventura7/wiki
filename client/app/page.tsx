'use client';
import usePages from '@/hooks/usePages';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const { pages } = usePages();
  const { push } = useRouter();

  const handleRandom = () => {
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    push(`/wiki/${randomPage}`);
  };

  return (
    <>
      <div>
        <label className="mr-2" htmlFor="query">
          Search:
        </label>
        <input
          className="border-b border-gray-600 transition duration-500 focus:border-b-orange-400 focus:outline-none"
          id="query"
          name="query"
          type="text"
        ></input>
      </div>
      <div className="mt-20 flex w-full justify-center space-x-10">
        <Link className="font-medium" href="/create">
          Create Page
        </Link>
        <button onClick={handleRandom} className="font-medium">
          Random Page
        </button>
      </div>
      <div className="mt-10 md:w-full md:max-w-3xl">
        <h1 className="text-center text-xl font-medium">All Pages</h1>
        <ul className="flex w-full flex-col items-center justify-between space-y-6 p-10 md:flex-row md:space-y-0 md:p-20">
          {pages.map((page, index) => (
            <div className="group" key={index}>
              <Link
                href={`/wiki/${page}`}
                className="inline-block text-xl transition duration-300 hover:-translate-y-1"
              >
                {page}
              </Link>
              <div className="w-full border-b-2 border-black group-hover:border-orange-400"></div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
