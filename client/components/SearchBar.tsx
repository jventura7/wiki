'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState<string>('');
  const { push } = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search?` +
          new URLSearchParams({
            query: search,
          })
      );
      const data = await response.json();
      if (data.found) {
        push(`/wiki/${search}`);
      } else {
        push(`/search/${search}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="pt-6 md:absolute md:right-5 md:pt-0"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="mr-2" htmlFor="query">
        Search:
      </label>
      <input
        className="border-b border-gray-600 font-normal transition duration-500 focus:border-b-orange-400 focus:outline-none"
        id="query"
        name="query"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
}
