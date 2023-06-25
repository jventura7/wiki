'use client';
import { useState, useEffect } from 'react';

export default function usePages() {
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    const getPages = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`);
      const pages = await response.json();
      setPages(pages['pages']);
    };
    getPages().catch((e) => console.log(e));
  }, []);

  return { pages };
}
