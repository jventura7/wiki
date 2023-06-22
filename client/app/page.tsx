'use client';
import Link from 'next/link';

export default function Home() {
  const handleRandom = async () => {
    const response = await fetch('http://127.0.0.1:8000/random');
    const data = await response.json();
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="p-10 text-6xl font-bold">wiki.</div>
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
        <Link onClick={handleRandom} className="font-medium" href="/">
          Random Page
        </Link>
      </div>
    </main>
  );
}
